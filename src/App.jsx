import { useState } from "react";
import Form from "./Form";


function App() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  return (
    <div>
      {!isSubmitted && <Form setIsSubmitted={setIsSubmitted} />}

    </div>
  );
}




export default App;
