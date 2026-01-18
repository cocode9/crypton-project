import { useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import CoinItem from "../atoms/CoinItem";

function CoinList({ bitcoin, setBitcoin, ethereum, setEthereum }) {
  const bit = useMemo(() => bitcoin, [bitcoin]);
  const eth = useMemo(() => ethereum, [ethereum]);

  const fetchData = useCallback(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd"
      )
      .then((res) => {
        setBitcoin(res.data["bitcoin"]["usd"]);
        setEthereum(res.data["ethereum"]["usd"]);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetchData();
    const refresh = setInterval(fetchData, 3000);
    return () => clearInterval(refresh);
  }, []);
  return (
    <ul>
      <li key={bit}>
        <CoinItem what="bitcoin" how={bit} />
      </li>
      <li key={eth}>
        <CoinItem what="ethereun" how={eth} />
      </li>
    </ul>
  );
}

export default CoinList;
