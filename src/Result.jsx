/* eslint-disable react/prop-types */

function Result({ correctAnswers, chosenOptions }) {
   let score = 0;
   for (let i = 0; i < correctAnswers.length; i++) {
      if (correctAnswers[i] === chosenOptions[i])
         score += 1;
   }
   console.log(correctAnswers, chosenOptions);

   return (
      <div>
         {score}
      </div>
   )
}

export default Result