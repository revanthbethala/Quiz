/* eslint-disable react/prop-types */
import { useState } from "react";

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

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center gap-6">
      <Questions
        results={data[count]}
        setCount={setCount}
        count={count}
        size={data.length}
      />
    </div>
  );
}
function Questions({ results, setCount, size, count }) {
  const [option, setOption] = useState(null);
  const [isActive, setIsActive] = useState(false);
  console.log(isActive);

  return (
    <div>
      <p>{results.question}</p>
      <div className="flex flex-col">
        {results.options.map((option, index) => (
          <button
            key={index}
            className={`rounded-xl m-2 p-3 font-semibold text-zinc-800 `}
            value={option}
            onClick={(e) => {
              setOption(e.target.value);
              setIsActive(true);
            }}
            disabled={isActive}
          >
            {option}
          </button>
        ))}
      </div>
      <div>
        {count < size - 1 && (
          <button
            onClick={() => {
              setCount(count + 1);
              setIsActive(false);
              setOption("");
            }}
            className="bg-violet-500 p-3 rounded-lg text-white"
          >
            Next
          </button>
        )}
        {option === results.correctAnswer && isActive
          ? "Correct Answer"
          : "Incorrect Answer"}
      </div>
    </div>
  );
}
