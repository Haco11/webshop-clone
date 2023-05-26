import axios from "axios";

export async function POST(request: Request) {
  const body = await request.json();
  const { product } = body;

  function formatAsOrderLines(currentCart: any) {
    currentCart.forEach((item: any) => {
      item.total_amount = item.quantity * item.unit_price;
      item.total_tax_amount =
        item.total_amount -
        (item.total_amount * 10000) / (10000 + item.tax_rate);
    });
    return currentCart;
  }

  function formatProduct(product: any) {
    return {
      type: "physical", // same
      reference: product.id,
      name: product.title,
      quantity: product.quantity,
      quantity_unit: "pcs", // same
      unit_price: product.price * 100,
      tax_rate: 2500, // same
      total_discount_amount: 0, // same
    };
  }

  function getKlarnaAuth() {
    const username = process.env.NEXT_PUBLIC_PUBLIC_KEY;
    const password = process.env.NEXT_PUBLIC_SECRET_KEY;
    const auth =
      "Basic " + Buffer.from(username + ":" + password).toString("base64");
    return auth;
  }

  async function createOrder(product: any) {
    const auth = getKlarnaAuth();
    const url = "https://api.playground.klarna.com/checkout/v3/orders";

    const formattedProduct = product.map(formatProduct);
    const order_lines = formatAsOrderLines(formattedProduct);

    let order_amount = 0;
    let order_tax_amount = 0;

    order_lines.forEach((item: any) => {
      order_amount += item.total_amount;
      order_tax_amount += item.total_tax_amount;
    });

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

    return await axios.post(url, payload, {
      headers: {
        "Content-Type": "application/json",
        Authorization: auth,
      },
    });
  }

  const response = await createOrder(product);
  return new Response(JSON.stringify(response.data), {
    status: 200,
  });
}
