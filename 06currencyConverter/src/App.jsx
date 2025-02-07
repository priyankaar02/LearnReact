import React, { useState, useEffect } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import { InputBox } from "./components/index.js";
import "./App.css";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const { data: currencyData } = useCurrencyInfo(from);
  const currencyOptions = Object.keys(currencyData);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    if (currencyData[to]) {
      setConvertedAmount(amount * currencyData[to]);
    }
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url("src/assets/image.avif")`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={currencyOptions}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange={(amount) => setAmount(amount)}
                selectedCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                Swap
              </button>
            </div>
            <div className="w-full mb-1">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={currencyOptions}
                onCurrencyChange={(currency) => setTo(currency)}
                selectedCurrency={to}
                amountDisabled
              />
            </div>
            <button
              type="submit"
              className="px-4 py-3 w-full bg-blue-500 text-white rounded-lg"
            >
              Convert {from} to {to}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

//NOTE
/*
- useState is used for creating and managing state in the component
 (i.e., values that will change over time).
- useEffect is used to handle side effects, like fetching data from an API when certain state values change.
- useCurrencyInfo is a custom hook that fetches the currency conversion rates.
-State Declarations:
    amount: This stores the amount the user inputs for conversion.
    from: This stores the currency from which the user is converting.
    to: This stores the target currency to which the user is converting.
    convertedAmount: This stores the result of the currency conversion based on the input amount.
    The useState hook is used to create these state variables and their corresponding setter functions (setAmount, setFrom, setTo, and setConvertedAmount).
  
- useCurrencyInfo(from):
    This hook is called with the from currency as a parameter. It fetches the exchange rates for the from currency.
    The hook returns:
    data: The exchange rate data for the requested currency.
    loading: A boolean flag indicating whether the data is still loading.
    error: Any error message that occurs during the API request.
    We destructure the return value from the useCurrencyInfo hook into data, loading, and error.*/
