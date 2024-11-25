/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { triviaCategories, levels } from "./data";
import useFetch from "./useFetch";

export default function Form({
<<<<<<< HEAD
   isSubmitted,
   setIsSubmitted,
   submittedData,
   setSubmittedData,
   setResponse,
}) {
   const [category, setCategory] = useState("");
   const [difficulty, setDifficulty] = useState("");
   const [amount, setAmount] = useState("");
   const fetchedData = useFetch(
      submittedData.amount,
      submittedData.category,
      submittedData.difficulty
   );
   const { error, response, isLoading } = fetchedData;

   useEffect(() => {
      setResponse(response);
   }, [response, setResponse]);

   function handleSubmit(event) {
      event.preventDefault();
      setIsSubmitted(true);
      if (amount && category && difficulty)
         setSubmittedData({ amount, category, difficulty });
   }

   return (
      <div className="flex h-screen w-full items-center justify-center p-4">
         <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-4  ">
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
               <option value="">Select Category</option>
               {triviaCategories.map((category, id) => (
                  <option value={id + 9} key={id}>
                     {category}
                  </option>
               ))}
            </select>
            {isSubmitted && !category && <Error value="category" />}
            <label htmlFor="level" className="label-style">
               Difficulty Level
            </label>
            <div className="flex justify-evenly w-full" id="level">
               {levels.map((level, index) => (
                  <button
                     key={index}
                     type="button"
                     onClick={() => {
                        setDifficulty(level);
                     }}
                     className={`rounded-3xl  border-2 border-purple-800  py-2 px-5 font-semibold  ${difficulty === level && "text-zinc-100 bg-purple-800"
                        }  text-purple-800 `}
                  >
                     {level}
                  </button>
               ))}
            </div>
            {isSubmitted && !difficulty && <Error value="difficulty level" />}
            <label htmlFor="amount" className="label-style">
               Set the Total Questions to Answer between 1-50
            </label>
            <input
               type="number"
               id="amount"
               min="1"
               max="50"
               value={amount}
               required
               onChange={(e) => setAmount(e.target.value)}
               className="rounded-md w-full border-2 border-black p-2 "
            />
            <input
               type="submit"
               className="w-full font-bold text-white rounded-full px-3 py-2 bg-purple-800 active:bg-purple-600 "
               disabled={isLoading}
               value={isLoading && !error ? "Loading..." : "Submit"}
            />

            {error && <Error value={error} />}
         </form>
      </div>
   );
}

function Error({ value }) {
   return (
      <p className="text-red-600 font-semibold">Please choose the {value}</p>
   );
}
=======
  isSubmitted,
  setIsSubmitted,
  submittedData,
  setSubmittedData,
  setResponse,
}) {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [amount, setAmount] = useState("");
  const fetchedData = useFetch(
    submittedData.amount,
    submittedData.category,
    submittedData.difficulty
  );
  const { error, response, isLoading } = fetchedData;

  useEffect(() => {
    setResponse(response);
  }, [response, setResponse]);
  console.log(response);

  function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitted(true);
    if (amount && category && difficulty)
      setSubmittedData({ amount, category, difficulty });
  }

  return (
    <div className="flex h-screen w-full items-center justify-center p-4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-4  ">
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
          <option value="">Select Category</option>
          {triviaCategories.map((category, id) => (
            <option value={id + 9} key={id}>
              {category}
            </option>
          ))}
        </select>
        {isSubmitted && !category && <Error value="category" />}
        <label htmlFor="level" className="label-style">
          Difficulty Level
        </label>
        <div className="flex justify-evenly w-full" id="level">
          {levels.map((level, index) => (
            <button
              key={index}
              type="button"
              onClick={() => {
                setDifficulty(level);
              }}
              className={`rounded-3xl  border-2 border-purple-800  py-2 px-5 font-semibold  ${
                difficulty === level && "text-zinc-100 bg-purple-800"
              }  text-purple-800 `}
            >
              {level}
            </button>
          ))}
        </div>
        {isSubmitted && !difficulty && <Error value="difficulty level" />}
        <label htmlFor="amount" className="label-style">
          Set the Total Questions to Answer between 1-50
        </label>
        <input
          type="number"
          id="amount"
          min="1"
          max="50"
          value={amount}
          required
          onChange={(e) => setAmount(e.target.value)}
          className="rounded-md w-full border-2 border-black p-2 "
        />
        <input
          type="submit"
          className="w-full font-bold text-white rounded-full px-3 py-2 bg-purple-800 active:bg-purple-600"
          disabled={isLoading}
        />
        {isLoading && !error && "Loading..."}
        {error && <Error value={error} />}
      </form>
    </div>
  );
}

function Error({ value }) {
  return (
    <p className="text-red-600 font-semibold">Please choose the {value}</p>
  );
}
>>>>>>> b1e06668778631e06c7c823dee463ec0d973a06b
