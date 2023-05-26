"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./Klarna.module.scss";
const Klarna = ({ cart }: any) => {
  const product = cart.map((item: any) => item.product);

  const [htmlSnippet, setHtmlSnippet] = useState("");

  async function fetchHtml(product: any) {
    const htmlSnippet = await axios.post("/api/klarna/createOrder", {
      product,
    });
    setHtmlSnippet(await htmlSnippet.data.html_snippet);
  }
  useEffect(() => {
    fetchHtml(product);
  }, []);

  useEffect(() => {}, []);
  return (
    <div className={styles.klarna}>
      {htmlSnippet !== "" && (
        <iframe
          title="klarnaCheckout"
          srcDoc={htmlSnippet}
          frameBorder="0"></iframe>
      )}
      {htmlSnippet === "" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="240"
          height="240"
          viewBox="0 0 240 240"
          fill="none"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-loader">
          <line x1="12" y1="2" x2="12" y2="6"></line>
          <line x1="12" y1="18" x2="12" y2="22"></line>
          <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
          <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
          <line x1="2" y1="12" x2="6" y2="12"></line>
          <line x1="18" y1="12" x2="22" y2="12"></line>
          <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
          <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
        </svg>
      )}
    </div>
  );
};

export default Klarna;
