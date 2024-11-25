import { useState } from "react";
import Form from "./Form";
import FetchedData from "./FetchedData";
function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState({});
  const [response, setResponse] = useState([]);
  return (
    <div>
      {isSubmitted && response ? (
        <FetchedData response={response} />
      ) : (
        <Form
          isSubmitted={isSubmitted}
          setIsSubmitted={setIsSubmitted}
          submittedData={submittedData}
          setSubmittedData={setSubmittedData}
          setResponse={setResponse}
        />
      )}
    </div>
  );
}

export default App;
