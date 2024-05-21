// import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// function Form(props) {
//   const [inputState, setInputState] = useState({
//     title: "",
//     amount: "",
//     date: "",
//     category: "",
//     description: "",
//   });

//   const handleInput = (name, e) => {
//     setInputState({ ...inputState, [name]: e.target.value });
//   };

//   const { title, amount, date, category, description } = inputState;

//   return (
//     <div>
//       <form className="" action="">
//         <div>
//           <input
//             type="text"
//             value={title}
//             name="title"
//             placeholder="Title"
//             onChange={(e) => {
//               handleInput("titile");
//             }}
//           />
//         </div>
//         <div>
//           <input
//             type="text"
//             value={title}
//             name="amount"
//             placeholder="Enter Amount"
//             onChange={(e) => {
//               handleInput("amount");
//             }}
//           />
//         </div>
//         <div>
//           <DatePicker
//             id="date"
//             placeholderText="Enter a date"
//             selected={date}
//             dateFormat={"dd/mm/yyyy"}
//             onChange={(e) => {
//               setInputState({ ...inputState, date: e });
//             }}
//           />
//         </div>
//         <div>
//           <select
//             required
//             value={category}
//             name="category"
//             id="category"
//             onChange={handleInput("category")}>
//             <option value="" disabled>
//               Select Option
//             </option>
//             <option value="salary">Salary</option>
//             <option value="freelancing">Freelancing</option>
//             <option value="investments">Investiments</option>
//             <option value="stocks">Stocks</option>
//             <option value="bitcoin">Bitcoin</option>
//             <option value="bank">Bank Transfer</option>
//             <option value="youtube">Youtube</option>
//             <option value="other">Other</option>
//           </select>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Form;
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from "../../context/globalContext";
import { plus } from "../../utils/Icons";

function Form(props) {
  const [inputState, setInputState] = useState({
    title: "",
    amount: "",
    date: "",
    category: "",
    description: "",
  });

  const { addIncome } = useGlobalContext();

  const handleInput = (name, e) => {
    setInputState({ ...inputState, [name]: e.target.value });
  };

  const { title, amount, date, category, description } = inputState;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputState);
    addIncome(inputState);
  };

  return (
    <div>
      <form
        className="flex flex-col gap-[2rem]"
        onSubmit={handleSubmit}
        action="">
        <div>
          <input
            className="outline-none w-full px-[0.5rem] py-[1rem] rounded-md border-2 border-[#fbfbfb] resize-none shadow-md text-[rgba(34,34,96,0.9)]
          placeholder:text-[rgba(34,34,96,0.4)]"
            type="text"
            value={title}
            name="title"
            placeholder="Title"
            onChange={(e) => handleInput("title", e)}
          />
        </div>
        <div>
          <input
            className="outline-none w-full px-[0.5rem] py-[1rem] rounded-md border-4 border-[#fbfbfb]  resize-none shadow-md text-[rgba(34,34,96,0.9)] b
          placeholder:text-[rgba(34,34,96,0.4)]"
            type="number"
            value={amount}
            name="amount"
            placeholder="Enter Amount"
            onChange={(e) => handleInput("amount", e)}
          />
        </div>
        <div className="flex">
          <DatePicker
            className="outline-none  px-[0.5rem] py-[1rem] rounded-md border-2  border-[#fbfbfb] resize-none shadow-md text-[rgba(34,34,96,0.9)]
          placeholder:text-[rgba(34,34,96,0.4)]"
            id="date"
            placeholderText="Enter a date"
            selected={date}
            dateFormat={"dd/MM/yyyy"}
            onChange={(date) => setInputState({ ...inputState, date })}
          />
          <div className="w-full flex justify-end">
          <select
            className="outline-none px-[0.5rem] py-[1rem] rounded-md border-2 border-[#fbfbfb] resize-none shadow-md text-[rgba(34,34,96,0.9)]
          placeholder:text-[rgba(34,34,96,0.4)]"
            required
            value={category}
            name="category"
            id="category"
            onChange={(e) => handleInput("category", e)}>
            <option value="" disabled>
              Select Option
            </option>
            <option value="salary">Salary</option>
            <option value="freelancing">Freelancing</option>
            <option value="investments">Investments</option>
            <option value="stocks">Stocks</option>
            <option value="bitcoin">Bitcoin</option>
            <option value="bank">Bank Transfer</option>
            <option value="youtube">YouTube</option>
            <option value="other">Other</option>
          </select>
        </div>
        </div>
        

        <div>
          <textarea
            className="outline-none  w-full px-[0.5rem] py-[1rem] rounded-md border-4 border-[#fbfbfb] resize-none shadow-md text-[rgba(34,34,96,0.9)]
          placeholder:text-[rgba(34,34,96,0.4)]"
            value={description}
            name="description"
            placeholder="Description"
            onChange={(e) => handleInput("description", e)}
          />
        </div>

        {/* Button */}
        <div>
          <button 
          className="bg-[#F56692] text-white font-semibold hover:bg-[#42AD00] text-lg rounded-lg border-2 px-2 py-2 transition-all ease-in-out duration-200"
          type="submit">Add Income {plus}</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
