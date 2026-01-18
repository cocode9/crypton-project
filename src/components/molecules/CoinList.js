import { useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import CoinItem from "../atoms/CoinItem";

function CoinList({
  bitcoin,
  setBitcoin,
  ethereum,
  setEthereum,
  setLoading,
  setError,
}) {
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
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError("Failed to load data. Please try again later.");
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetchData();
    const refresh = setInterval(fetchData, 30000);
    return () => clearInterval(refresh);
  }, []);

  return (
    <ul>
      <li key={bit}>
        <div className="coin-row">
          <CoinItem what="bitcoin" how={bit} />
        </div>
      </li>
      <li key={eth}>
        <div className="coin-row">
          <CoinItem what="ethereun" how={eth} />
        </div>
      </li>
    </ul>
  );
}

export default CoinList;
