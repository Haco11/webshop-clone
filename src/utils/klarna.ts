"use server";
import { Product } from "@/type/Product";

function getKlarnaAuth() {
  const username = process.env.NEXT_PUBLIC_PUBLIC_KEY;
  const password = process.env.NEXT_PUBLIC_SECRET_KEY;
  const auth =
    "Basic " + Buffer.from(username + ":" + password).toString("base64");
  return auth;
}
function formatProduct(product: Product) {
  const quantity = product.quantity;
  const price = product.price * 100;
  const total_amount = price * quantity;
  const total_tax_amount =
    total_amount - (total_amount * 10000) / (10000 + 2500);
  return {
    type: "physical",
    reference: product.id,
    name: product.title,
    quantity,
    quantity_unit: "p",
    unit_price: price,
    tax_rate: 2500,
    total_discount_amount: 0,
    total_amount,
    total_tax_amount,
  };
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

  const order_lines = products.map(formatProduct);

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
      checkout: "https://www.example.com/checkout.html",
      confirmation: `${process.env.NEXT_PUBLIC_REDIRECT_URL}/confirmation?order_id={checkout.order.id}`,
      push: "https://www.example.com/api/push",
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
