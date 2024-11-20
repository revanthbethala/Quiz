/* eslint-disable react/prop-types */
import { useState } from "react";
import { triviaCategories, levels } from "./data";
import useFetch from "./useFetch";
import FetchedData from "./FetchedData";


export default function Form({ setIsSubmitted }) {
   const [category, setCategory] = useState(9);
   const [difficulty, setDifficulty] = useState("");
   const [amount, setAmount] = useState("10");
   const [Iserror, setIsError] = useState({
      difficulty: "",
      amount: "",
   });
   const [submittedData, setSubmittedData] = useState({ amt: "", cat: "", level: "" });
   const { amt, cat, level } = submittedData;
   const { error, response, isLoading } = useFetch({ amount: amt, category: cat, difficulty: level })

   const handleSubmit = (event) => {
      event.preventDefault();

      const newErrors = {
         difficulty: !difficulty ? "Please choose difficulty level" : "",
         amount: amount < 1 || amount > 50 ? "No.of questions should be between 1 - 50" : "",
      };

      setIsError(newErrors);
      if (!Object.values(newErrors).some(error => error))
         setSubmittedData({
            amt: amount,
            cat: category,
            level: difficulty
         })
      if (!isLoading && !Object.values(newErrors).some(error => error) && !error) {
         setIsSubmitted(true);
         < FetchedData response={response} />

      }

   };

   return (
      <div className="flex h-screen w-full items-center justify-center p-4">
         <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 p-4  "
         >
            <div className="text-center space-y-2">
               <h1 className=" font-semibold text-2xl">QUIZ-IO</h1>
               <p>A place to test your knowledge</p>
            </div>
            <label htmlFor="category" className="label-style">
               Choose Category
            </label>
            <select
               id="category"
               value={category}
               onChange={(e) => setCategory(e.target.value)}
               className="border-2 border-black rounded-lg p-2 w-full text-fuchsia-700 font-semibold"
            >
               {triviaCategories.map((category, id) => (
                  <option value={id + 9} key={id}>
                     {category}
                  </option>
               ))}
            </select>

            <label htmlFor="level" className="label-style">
               Difficulty Level
            </label>
            <div className="flex justify-evenly w-full" id="level">
               {levels.map((level, index) => (
                  <button
                     key={index}
                     type="button"
                     onClick={() => setDifficulty(level)}
                     className={`rounded-3xl  border-2 border-purple-800  py-2 px-5 font-semibold  ${difficulty === level && "text-zinc-100 bg-purple-800"}  text-purple-800 `}
                  >
                     {level.charAt(0).toUpperCase() + level.slice(1)}
                  </button>
               ))}
            </div>
            {Iserror.difficulty && <p className="text-red-600 font-semibold">{Iserror.difficulty}</p>}

            <label htmlFor="amount" className="label-style">
               Set the Total Questions to Answer between 1-50
            </label>
            <input
               type="number"
               id="amount"
               min="1"
               max="50"
               value={amount}
               onChange={(e) => setAmount(e.target.value)}
               className="rounded-md w-full border-2 border-black p-2 "
            />
            {Iserror.amount && <p className="text-red-600 font-semibold">{Iserror.amount}</p>}

            <input
               type="submit"
               className="w-full font-bold text-white rounded-full px-3 py-2 bg-purple-800 active:bg-purple-600"
               value={isLoading ? "Loading..." : "Submit"}
            />
            {response?.response_code === 2 && <p className="text-red-600 font-semibold">Currently Our DataBase does not have enough questions. <br />   Please choose less than {amount} questions </p>}
         </form >
      </div >
   );
}