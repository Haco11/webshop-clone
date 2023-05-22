import { Product } from "@/type/Product";

function getKlarnaAuth() {
  const username = process.env.NEXT_PUBLIC_PUBLIC_KEY;
  const password = process.env.NEXT_PUBLIC_SECRET_KEY;
  const auth =
    "Basic " + Buffer.from(username + ":" + password).toString("base64");
  return auth;
}
function formatProduct(product: Product) {
  return {
    type: "physical", // same
    reference: product.id,
    name: product.title,
    quantity: product.quantity,
    quantity_unit: "pcs", // same
    unit_price: product.price * 100,
    tax_rate: 2500,
    total_discount_amount: 0, // same
  };
}
function formatAsOrderLines(currentCart: any) {
  currentCart.forEach((item: any) => {
    item.total_amount = item.quantity * item.unit_price;
    item.total_tax_amount =
      item.total_amount - (item.total_amount * 10000) / (10000 + item.tax_rate);
  });
  return currentCart;
}

export async function createOrder(products: Product[]) {
  const path = "/checkout/v3/orders";
  const auth = getKlarnaAuth();

  const url = process.env.NEXT_PUBLIC_BASE_URL + path;
  const method = "POST";
  const headers = {
    "Content-Type": "application/json",
    Authorization: auth,
  };

  const formattedProduct = products.map(formatProduct);
  const order_lines = formatAsOrderLines(formattedProduct);

  let order_amount = 0;
  let order_tax_amount = 0;

  order_lines.forEach((item: any) => {
    order_amount += item.total_amount;
    order_tax_amount += item.total_tax_amount;
  });

  // The payload we send to Klarna
  const payload = {
    purchase_country: "SE",
    purchase_currency: "SEK",
    locale: "sv-SE",
    order_amount: order_amount,
    order_tax_amount: order_tax_amount,
    order_lines,
    merchant_urls: {
      terms: "https://www.example.com/terms.html",
      checkout:
        "https://www.example.com/checkout.html?order_id={checkout.order.id}",
      confirmation:
        "http://localhost:3000/confirmation?order_id={checkout.order.id}",
      push: "https://www.example.com/api/push?order_id={checkout.order.id}",
    },
  };

  const body = JSON.stringify(payload);
  const response = await fetch(url, { method, headers, body });
  const jsonResponse = await response.json();

  // "200" is success from Klarna KCO docs
  if (response.status === 200 || response.status === 201) {
    return jsonResponse;
  } else {
    console.error("ERROR: ", jsonResponse);
    return { html_snippet: `<h1>${JSON.stringify(jsonResponse)}</h1>` };
  }
}
