import React, { useId } from "react";
//useId is a React hook introduced in React 18 that generates unique IDs for accessibility purposes

//The InputBox component is used to input the amount and select the currency type. This component is reusable for both the "from" and "to" currency selection.
function InputBox({
  //React component that takes multiple props
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "USD",
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
}) {
  const id = useId(); // Unique id for input elements

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      {/* This is the left half of the flex container, where the input field for the amount is located. */}
      <div className="w-1/2">
        <label htmlFor={id} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          id={id}
          type="number"
          className="outline-none w-full bg-transparent py-1.5"
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      {/* This is the right half of the flex container, which contains the dropdown for selecting the currency. */}
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisabled}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
