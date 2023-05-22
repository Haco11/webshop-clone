import React from "react";

function getKlarnaAuth() {
  const username = process.env.NEXT_PUBLIC_PUBLIC_KEY;
  const password = process.env.NEXT_PUBLIC_SECRET_KEY;
  const auth =
    "Basic " + Buffer.from(username + ":" + password).toString("base64");
  return auth;
}

async function createOrder() {
  const product = {
    price: 10,
    title: "Socks",
    id: 1001,
  };

  const path = "/checkout/v3/orders";
  const auth = getKlarnaAuth();

  const url = process.env.NEXT_PUBLIC_BASE_URL + path;
  const method = "POST";
  const headers = {
    "Content-Type": "application/json",
    Authorization: auth,
  };

  const quantity = 1;
  const price = product.price * 100;
  const total_amount = price * quantity;
  const total_tax_amount = total_amount * 0.2;

  // The payload we send to Klarna
  const payload = {
    purchase_country: "SE",
    purchase_currency: "SEK",
    locale: "sv-SE",
    order_amount: total_amount,
    order_tax_amount: total_tax_amount,
    order_lines: [
      {
        type: "physical",
        reference: product.id,
        name: product.title,
        quantity,
        quantity_unit: "pcs",
        unit_price: price,
        tax_rate: 2500,
        total_amount: total_amount,
        total_discount_amount: 0,
        total_tax_amount,
      },
    ],
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

const Page = async (props: any) => {
  let productId = props.params.ids;

  const htmlSnippet = (await createOrder()).html_snippet;

  return (
    <div
      style={{ marginTop: 100 }}
      dangerouslySetInnerHTML={{ __html: htmlSnippet }}
    />
  );
};

export default Page;
