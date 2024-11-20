/* eslint-disable react/prop-types */
import { useState } from "react"

export default function FetchedData({ response }) {
   const [fetchedData, setFetchedData] = useState([])
   setFetchedData(response?.results.map((result, id) => {
      return (
         {
            id: id,
            question: result.question,
            options: [...result.incorrect_answers, result.correct_answer],
            correctAnswer: result.correct_answer
         }
      )
   }))

   return (
      <div>
         <Questions results={fetchedData} />
      </div>
   )
}
function Questions({ results }) {
   const [count, setCount] = useState(0)
   return (
      <div>
         <p>{results.question}</p>
         <div>
            <ul>
               {results.options.sort().map(
                  (option, index) => (
                     <li key={index}>{results.options} </li>
                  ))}
            </ul>
            <div>
               {count < results.length && <button onClick={() => setCount(count + 1)}>{"Next"}</button>}
               {count > 0 && <button onClick={() => setCount(count - 1)}>{"Back"}</button>}
            </div>
         </div>
      </div>
   )
}
