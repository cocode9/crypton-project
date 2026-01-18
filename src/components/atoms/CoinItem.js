import React from "react";

function CoinItem({ what, how }) {
  return (
    <>
      <h1>{what}</h1>
      <h1>{how}$</h1>
    </>
  );
}

export default CoinItem;
