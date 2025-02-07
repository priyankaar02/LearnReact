import { useEffect, useState } from "react";

//The hook fetches the currency conversion rates for the "from" currency, and the available currencies are extracted from currencyData.
function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_KEY = import.meta.env.VITE_API_KEY;
  useEffect(() => {
    const fetchCurrencyData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${currency}`
        );

        if (!response.ok) {
          throw new Error(`API request failed with status: ${response.status}`);
        }

        const data = await response.json();

        if (data && data.conversion_rates && data.conversion_rates[currency]) {
          setData(data.conversion_rates);
        } else {
          throw new Error("Currency data not found in API response");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCurrencyData();
  }, [currency]);

  return { data };
}

export default useCurrencyInfo;
