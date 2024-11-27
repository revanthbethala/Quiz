import { useState } from "react";
import Form from "./Form";
const QuizRules = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div
        className={`max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6 ${
          isActive && "hidden"
        }`}
      >
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Instructions
        </h2>
        <p className="text-lg text-gray-600 text-center mb-6">
          Welcome to <strong>QUIZ-IO</strong>! Please review the following rules
          for a smooth quiz experience:
        </p>

        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-700">
              1. Time Limit
            </h3>
            <p className="text-gray-600">
              You have <strong>3 minutes</strong> per question. The quiz will
              automatically move to the next question after time expires.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-700">
              2. Answer Submission
            </h3>
            <p className="text-gray-600">
              Click <strong>Next</strong> to submit your answer. If you don’t
              click Next your answer won&quot;t be considered.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-700">
              3. No Back Navigation
            </h3>
            <p className="text-gray-600">
              You cannot go back to previous questions once you move on to the
              next.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-700">
              4. Passing Score
            </h3>
            <p className="text-gray-600">
              To pass, you need at least <strong>40%</strong> correct answers.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-700">
              5. Unlimited Attempts
            </h3>
            <p className="text-gray-600">
              You can retake the quiz as many times as you want to improve your
              score.
            </p>
          </div>

          <div className="bg-green-100 border-l-4 border-green-500 p-4 rounded-md mt-6">
            <h3 className="text-lg font-semibold text-green-700">
              Good luck and enjoy!
            </h3>
          </div>
        </div>

        <div className="text-center mt-6">
          <button
            className="bg-violet-800 text-white rounded-2xl p-3"
            onClick={() => setIsActive(true)}
          >
            Proceed
          </button>
        </div>
      </div>
      {isActive && <Form />}
    </>
  );
};

export default QuizRules;
