import { useState, useEffect } from "react";

function Form({ bitcoin, ethereum }) {
  const [price, setPrice] = useState(0);
  let timer;
  const convert = (value) => {
    if (timer != undefined) clearTimeout(timer);
    timer = setTimeout(() => setPrice(value), 300);
  };
  return (
    <div className="price-form">
      <input onChange={(e) => convert(e.target.value)} />
      <label>$</label>
      <input value={Number((price / bitcoin).toFixed(7)) || 0} disabled />
      <label>B</label>
      <input value={Number((price / ethereum).toFixed(7)) || 0} disabled />
      <label>E</label>
    </div>
  );
}

export default Form;
