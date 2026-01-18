import { useState } from "react";
import CoinList from "../molecules/CoinList";
import Form from "../molecules/Form";

function PriceConverter() {
  const [bitcoin, setBitcoin] = useState();
  const [ethereum, setEthereum] = useState();

  return (
    <>
      <CoinList
        bitcoin={bitcoin}
        setBitcoin={setBitcoin}
        ethereum={ethereum}
        setEthereum={setEthereum}
      />
      <Form bitcoin={bitcoin} ethereum={ethereum} />
    </>
  );
}

export default PriceConverter;
