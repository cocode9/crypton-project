import { useEffect, useState } from "react";
import axios from "axios";
import CoinItem from "../atoms/CoinItem";

function CoinList() {
  const [bitcoin, setBitcoin] = useState();
  const [ethereum, setEthereum] = useState();
  const [flag, setFlag] = useState(0);

  useEffect(() => {
    if (!flag) {
      setFlag(1);
      axios
        .get(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd"
        )
        .then((res) => {
          setBitcoin(res.data["bitcoin"]["usd"]);
          setEthereum(res.data["ethereum"]["usd"]);
        })
        .catch((err) => console.log(err));
    }
  }, []);
  return (
    <ul>
      <li key={bitcoin}>
        <CoinItem what="bitcoin" how={bitcoin} />
      </li>
      <li key={ethereum}>
        <CoinItem what="ethereun" how={ethereum} />
      </li>
    </ul>
  );
}

export default CoinList;
