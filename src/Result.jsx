/* eslint-disable react/prop-types */

import useAppContext from "./AppContext";

function Result({ correctAnswers }) {
  const { chosenOptions } = useAppContext();
  let score = 0,
    wrongAnswers = 0,
    unAnswered = 0;

  for (let i = 0; i < correctAnswers.length; i++) {
    if (correctAnswers[i] === chosenOptions[i]) score += 1;
    if (correctAnswers[i] !== chosenOptions[i] && chosenOptions[i] !== "")
      wrongAnswers += 1;
    if (chosenOptions[i] === "") unAnswered += 1;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6">
      <div className="border-[4px] border-green-400 rounded-full p-7">
        <h3>
          {score}/{correctAnswers.length}
        </h3>
      </div>
      <h4>Wrong Answers: {wrongAnswers}</h4>
      <h4>Unanswered Questions: {unAnswered}</h4>
    </div>
  );
}

export default Result;
