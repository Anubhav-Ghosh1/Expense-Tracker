import React, { useState } from "react";
import { useGlobalContext } from "../../context/globalContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { plus } from "../../utils/Icons";
import styled from "styled-components";

function ExpenseForm(props) {
  const { addExpense, error, setError,getExpenses } = useGlobalContext();
  const [inputState, setInputState] = useState({
    title: "",
    amount: "",
    date: "",
    category: "",
    description: "",
  });

  const { title, amount, date, category, description } = inputState;

  const handleInput = (name) => (e) => {
    setInputState({ ...inputState, [name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense(inputState);
    setInputState({
      title: "",
      amount: "",
      date: "",
      category: "",
      description: "",
    });
  };

  return (
    <div>
      <form className="flex flex-col gap-[2rem]" onSubmit={handleSubmit}>
        {error && <p className="error">{error}</p>}
        <div className="input-control">
          <input
            type="text"
            value={title}
            name={"title"}
            className="outline-none w-full border-none px-[0.5rem] py-[1rem] rounded-md border-2 border-[#fffff] resize-none shadow-md text-[rgba(34,34,96,0.9)]
          placeholder:text-[rgba(34,34,96,0.4)]"
            placeholder="Expense Title"
            onChange={handleInput("title")}
          />
        </div>
        <div>
          <input
            value={amount}
            className="outline-none w-full border-none px-[0.5rem] py-[1rem] rounded-md border-2 border-[#fffff] resize-none shadow-md text-[rgba(34,34,96,0.9)]
                placeholder:text-[rgba(34,34,96,0.4)]"
            type="text"
            name={"amount"}
            placeholder={"Expense Amount"}
            onChange={handleInput("amount")}
          />
        </div>
        <div className="flex">
          <DatePicker
            id="date"
            className="outline-none border-none px-[0.5rem] py-[1rem] rounded-md border-2 border-[#fffff] resize-none shadow-md text-[rgba(34,34,96,0.9)]
          placeholder:text-[rgba(34,34,96,0.4)]"
            placeholderText="Enter A Date"
            selected={date}
            dateFormat="dd/MM/yyyy"
            onChange={(date) => {
              setInputState({ ...inputState, date: date });
            }}
          />
          <div className="w-full flex justify-end">
            <select
              required
              value={category}
              className="outline-none border-none px-[0.5rem] py-[1rem] rounded-md border-2 border-[#fffff] resize-none shadow-md text-[rgba(34,34,96,0.9)]
                 placeholder:text-[rgba(34,34,96,0.4)]
                 "
              name="category"
              id="category"
              onChange={handleInput("category")}>
              <option value="" disabled>
                Select Option
              </option>
              <option value="education">Education</option>
              <option value="groceries">Groceries</option>
              <option value="health">Health</option>
              <option value="subscriptions">Subscriptions</option>
              <option value="takeaways">Takeaways</option>
              <option value="clothing">Clothing</option>
              <option value="travelling">Travelling</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <div>
          <textarea
            className="outline-none  w-full px-[0.5rem] py-[1rem] rounded-md border-4 border-[#fbfbfb] resize-none shadow-md text-[rgba(34,34,96,0.9)]
            placeholder:text-[rgba(34,34,96,0.4)]"
            name="description"
            value={description}
            placeholder="Add A Reference"
            id="description"
            cols="30"
            rows="4"
            onChange={handleInput("description")}></textarea>
        </div>
        <div className="submit-btn">
          <button
            className="bg-[#F56692] text-white font-semibold hover:bg-[#42AD00] text-lg rounded-lg border-2 px-2 py-2 transition-all ease-in-out duration-200"
            type="submit">
            Add Expense {plus}
          </button>
        </div>
      </form>
    </div>
  );
}
export default ExpenseForm;
