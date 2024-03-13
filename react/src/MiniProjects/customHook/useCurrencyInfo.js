import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data,setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/`+currency+`.json`
    )
    .then((response)=> response.json())
    .then((response)=> setData(response[currency]))
    console.log("Data 1 : ",data);
  }, [currency]);
  console.log("Data 2 : ",data);
  return data;
}

export default useCurrencyInfo