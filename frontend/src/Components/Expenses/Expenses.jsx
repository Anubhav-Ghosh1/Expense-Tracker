import React, { useEffect } from "react";
import { useGlobalContext } from "../../context/globalContext";
import styled from "styled-components";
import ExpenseForm from "../Expenses/ExpenseForm";
import IncomeItem from "../IncomeItem/IncomeItem";
import {
  bitcoin,
  book,
  calender,
  card,
  circle,
  clothing,
  comment,
  food,
  freelance,
  medical,
  money,
  piggy,
  stocks,
  takeaway,
  trash,
  tv,
  users,
  yt,
} from "../../utils/Icons";
import { dateFormat } from "../../utils/dateFormat";

function Expenses(props) {
  const { addIncome, expenses, getExpenses, deleteExpense, totalExpenses } =
    useGlobalContext();

  const categoryIcon = (category) => {
    switch (category) {
      case "salary":
        return money;
      case "freelancing":
        return freelance;
      case "investments":
        return stocks;
      case "stocks":
        return users;
      case "bitcoin":
        return bitcoin;
      case "bank":
        return card;
      case "youtube":
        return yt;
      case "other":
        return piggy;
      default:
        return "";
    }
  };

  const expenseCatIcon = (category) => {
    switch (category) {
      case "education":
        return book;
      case "groceries":
        return food;
      case "health":
        return medical;
      case "subscriptions":
        return tv;
      case "takeaways":
        return takeaway;
      case "clothing":
        return clothing;
      case "travelling":
        return freelance;
      case "other":
        return circle;
      default:
        return "";
    }
  };

  function totalExpense() {
    let totalExpenseVariable = 0;
    expenses.forEach((expense) => {
      totalExpenseVariable += expense.amount;
    });
    console.log(totalExpenseVariable);
    return totalExpenseVariable;
  }

  useEffect(() => {
    // getExpenses();
    getExpenses();
    console.log("Expense 1: expenses", expenses);
  }, []);
  return (
    <div className="flex w-full p-10 overflow-auto">
      <div className="w-full">
        <p className="text-4xl mb-5 ml-5 font-semibold">Expenses</p>
        <h2 className="flex justify-center items-center bg-[#fxf6f9] border-4 border-[#ffffff] shadow-md rounded-md p-[1rem] mx-[1rem] text-[2rem] gap-[0.5rem]">
          Total Expense:{" "}
          <span className="text-[2.5rem] text-[#42AD00]">
            &#8377;{expenses && totalExpense()}
          </span>
        </h2>
        <div className="flex w-full p-[1rem] justify-between">
          <div className="w-[50%]">
            <ExpenseForm />
          </div>
          <div className="w-[45%]">
            {expenses &&
              expenses.map((income) => {
                const {
                  _id,
                  title,
                  amount,
                  date,
                  category,
                  description,
                  type,
                } = income;
                return (
                  <div
                    key={_id}
                    className="flex items-center gap-[1rem] w-full text-[#222260] bg-[#fdf6f9] h-36 rounded-lg border-4 border-[#ffffff] shadow-lg hover:scale-95 hover:shadow-xl transition-all ease-in duration-200 p-[1rem] mb-[1rem]">
                    <div className="flex justify-center items-center h-[80px] w-[80px] border-2 border-[#ffffff] bg-[#f5f5f5] rounded-[20px] text-[2.6rem]">
                      {category === "expense"
                        ? expenseCatIcon(category)
                        : categoryIcon(category)}
                    </div>
                    <div className="flex-1 flex flex-col gap-[0.2rem]">
                      <p className="content1 text-[1.3rem] pl-[2rem] relative">
                        {title}
                      </p>

                      <div className="flex justify-between items-center gap-[1.5rem]">
                        <div className="flex gap-8">
                          <p className="flex items-center gap-[0.1rem] text-[#222260] opacity-80">
                            &#8377;{amount}
                          </p>
                          <p className="flex items-center gap-[0.2rem] text-[#222260] opacity-80">
                            <span className="flex justify-center items-center ">
                              {calender}
                            </span>
                            {dateFormat(date)}
                          </p>
                          <p className="flex items-center gap-[0.5rem] text-[#222260] opacity-80">
                            <div className="flex gap-2 justify-center items-center">
                              <p>{comment}</p>
                              <p>{description}</p>
                            </div>
                          </p>
                        </div>
                        <div className="flex items-center justify-center">
                          {/* button */}
                          <button
                            className="bg-[#222260] rounded-full h-[40px] w-[40px] text-white"
                            onClick={() => {
                              deleteExpense(_id);
                            }}>
                            {trash}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

const ExpenseStyled = styled.div`
  display: flex;
  overflow: auto;
  .total-income {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fcf6f9;
    border: 2px solid #ffffff;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin: 1rem 0;
    font-size: 2rem;
    gap: 0.5rem;
    span {
      font-size: 2.5rem;
      font-weight: 800;
      color: var(--color-green);
    }
  }
  .income-content {
    display: flex;
    gap: 2rem;
    .incomes {
      flex: 1;
    }
  }
`;

export default Expenses;
