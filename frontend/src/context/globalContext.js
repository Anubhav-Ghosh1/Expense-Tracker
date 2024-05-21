import React, { createContext, useContext, useState } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:5000/api/v1";

const Globalcontext = createContext();

export const GlobalProvide = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);

  const addIncome = async (income) => {
    const response = await axios
      .post(`${BASE_URL}/add-income`, income)
      .catch((e) => {
        setError(e.response.data.message);
      });
    console.log(response);
  };

  const getincome = async () => {
    const response = await axios.get(`${BASE_URL}/get-incomes`).catch((e) => {
      setError(e.response.data.message);
    });
    // console.log("A",response.data.data)
    await setIncomes(response.data.data);
  };

  const deleteIncome = async (id) => {
    const res = await axios.delete(`${BASE_URL}/delete-income/${id}`);
    getincome();
  };

  const totalIncome = () => {
    let totalIncome = 0;
    incomes.forEach((income) => {
      totalIncome = totalIncome + income.amount;
    });

    return totalIncome;
  };

  const addExpense = async (income) => {
    console.log("b")
    const response = await axios
      .post(`${BASE_URL}/add-expense`, income)
      .catch((err) => {
        setError(err.response.data.message);
      });
      console.log("B",response)
    getExpenses();
  };

  const getExpenses = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/get-expenses`);
      setExpenses(response.data.data);
      // console.log("Expense: ",expenses)
      // console.log("Expenses fetched:", response.data.data);
    } catch (e) {
      setError(e.response?.data?.message || "An error occurred");
    }
  };

  const deleteExpense = async (id) => {
    const res = await axios.delete(`${BASE_URL}/delete-expense/${id}`);
    getExpenses();
  };

  const totalExpenses = () => {
    let totalIncome = 0;
    expenses.map((income) => {
      totalIncome = totalIncome + income.amount;
    });
    console.log(totalIncome)
    return totalIncome;
  };

  const totalBalance = () => {
    return totalIncome() - totalExpenses();
  };

  const transactionHistory = () => {
    const history = [...incomes, ...expenses];
    history.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

    return history.slice(0, 3);
  };

  return (
    <Globalcontext.Provider
      value={{
        addIncome,
        getincome,
        incomes,
        deleteIncome,
        expenses,
        totalIncome,
        addExpense,
        getExpenses,
        deleteExpense,
        totalExpenses,
        totalBalance,
        transactionHistory,
        error,
        setError,
      }}>
      {children}
    </Globalcontext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(Globalcontext);
};
