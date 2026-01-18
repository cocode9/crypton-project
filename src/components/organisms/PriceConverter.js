import { useState } from "react";
import CoinList from "../molecules/CoinList";
import Form from "../molecules/Form";

function PriceConverter() {
  const [bitcoin, setBitcoin] = useState();
  const [ethereum, setEthereum] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  if (error) {
    return <div>{error}</div>; // Display error message
  }

  return (
    <div className="price-container">
      <div>
        <>
          <CoinList
            bitcoin={bitcoin}
            setBitcoin={setBitcoin}
            ethereum={ethereum}
            setEthereum={setEthereum}
            setError={setError}
            setLoading={setLoading}
          />
          <Form bitcoin={bitcoin} ethereum={ethereum} />
        </>
      </div>
    </div>
  );
}

export default PriceConverter;
