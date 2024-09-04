import React, { Children, createContext, useState } from "react";
import AppReducer from "./AppReducer";
//Initial State
const initialState = {
  a: 1,
  b: 2,
  transactions: [],
};
//Create Context
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({ children }) => {
  //   const [state, dispatch] = useReducer(AppReducer, initialState);
  const [state, setState] = useState([]);

  //Actions
  //   function deleteTransaction(id) {
  //     dispatch({
  //       type: "DELETE_TRANSACTION",
  //       payload: id,
  //     });
  //   }
  function deleteTransaction(id) {
    setState((prev) => prev.filter((transaction) => transaction.id !== id));
  }

  //   function addTransaction(transaction) {
  //     dispatch({
  //       type: "ADD_TRANSACTION",
  //       payload: transaction,
  //     });
  //   }
  function addTransaction(transaction) {
    setState((prev) => [...prev, transaction]);
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
