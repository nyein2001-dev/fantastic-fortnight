/* eslint-disable react/display-name */
import { useSelector } from "react-redux";

const useCurrency = () => {
  const currency = useSelector((state) => state.defaultSettings.activeCurrency);

  return (price) => {
    const mainPrice = Number(price) * Number(currency.currency_rate);
    if (currency.currency_position === "left") {
      return (
        <span className="notranslate">
          {currency.currency_icon + mainPrice}
        </span>
      );
    } else {
      return (
        <span className="notranslate">
          {mainPrice + currency.currency_icon}
        </span>
      );
    }
  };
};

export default useCurrency;
/* eslint-enable react/display-name */
