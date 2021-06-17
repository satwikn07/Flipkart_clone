import React, { useState } from "react";


const Pricecontext = React.createContext({ // all the parameters that we need
  count:0,
  price:0,
  discount:0,
  total:0,
  setCount:()=>{},
  setPrice:()=>{},
  setDiscount:()=>{},
  setTotal:()=>{},
}); 
const PricecontextProvider = ({ children }) => {
 
    const [count, setCount]= useState(1)
    const [price, setPrice]= useState(0)
    const [discount, setDiscount]= useState(0)
    const [total, setTotal] = useState(0)
  
  return (
    <Pricecontext.Provider
      value={{
        count,
        price,
        discount,
        total,
        setCount,
        setPrice,
        setDiscount,
        setTotal
      }}
    >
      {children}
    </Pricecontext.Provider>
  );
};
export { Pricecontext, PricecontextProvider };
