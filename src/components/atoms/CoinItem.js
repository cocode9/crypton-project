import React from "react";

function CoinItem({ what, how }) {
  return (
    <h1>
      {what}------------------{how}$
    </h1>
  );
}

export default CoinItem;
