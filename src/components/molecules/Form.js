import { useState } from "react";

function Form({ bitcoin, ethereum }) {
  const [price, setPrice] = useState(0);
  const convert = (value) => {
    setPrice(value);
  };
  return (
    <div className="price-form">
      <input value={price} onChange={(e) => convert(e.target.value)} />
      <label>$</label>
      <input value={Number((price / bitcoin).toFixed(7))} disabled />
      <label>B</label>
      <input value={Number((price / ethereum).toFixed(7))} disabled />
      <label>E</label>
    </div>
  );
}

export default Form;
