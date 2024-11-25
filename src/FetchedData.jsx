/* eslint-disable react/prop-types */
import { useState } from "react";
import Result from "./Result";

export default function FetchedData({ response }) {
   const [count, setCount] = useState(0);
   const data = response?.results.map((result, id) => {
      return {
         id: id,
         question: result.question,
         options: [...result.incorrect_answers, result.correct_answer].sort(),
         correctAnswer: result.correct_answer,
      };
   });
   const correctAnswers = data.map((que) => que.correctAnswer)

   return (
      <div className={`h-screen flex flex-col items-center justify-center gap-6`}>
         <Questions
            results={data[count]}
            setCount={setCount}
            count={count}
            size={data.length}
            correctAnswers={correctAnswers}
         />
      </div>
   );
}

function Questions({ results, setCount, size, count, correctAnswers }) {
   const [selectedOption, setSelectedOption] = useState(null);
   const [chosenOptions, setChosenOptions] = useState([])

   function handleClick(e) {
      e.preventDefault()
      setChosenOptions((pre) => [...pre, selectedOption])
      setSelectedOption("");
      if (count < size)
         setCount(count + 1);
   }



   return (
      <div>
         <div className={` ${count > size + 1 && "hidden"}`}>
            <p className="font-semibold text-2xl">
               Question {count + 1}/{size}
            </p>
            <p className="font-semibold text-lg">
               {count + 1}. {results.question}
            </p>
            <div className="flex flex-col">
               {results.options.map((option, index) => (
                  <button
                     key={index}
                     className={`rounded-xl m-2 p-3 font-semibold text-zinc-800 bg-zinc-200 focus:bg-violet-800 ease-linear duration-100`}
                     value={option}
                     onClick={e => setSelectedOption(e.target.value)}
                  >
                     {option}
                  </button>
               ))}
            </div>

            <button
               onClick={handleClick}
               className="bg-violet-700 p-3 rounded-lg text-white text-right"
            >
               {count === size - 1 ? "Submit" : "Next"}
            </button>
         </div>
         {count === size - 1 && <Result correctAnswers={correctAnswers} chosenOptions={chosenOptions} />}

      </div >)
}
