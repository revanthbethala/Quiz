/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const AppContext = createContext();
const timeLimit = 180;

function useAppContext() {
  return useContext(AppContext);
}

function AppProvider({ children }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState({});
  const [response, setResponse] = useState([]);
  const [count, setCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [chosenOptions, setChosenOptions] = useState([]);
  const [time, setTime] = useState(timeLimit);

  return (
    <AppContext.Provider
      value={{
        isSubmitted,
        setIsSubmitted,
        response,
        setResponse,
        submittedData,
        setSubmittedData,
        time,
        setTime,
        count,
        setCount,
        isFinished,
        setIsFinished,
        chosenOptions,
        setChosenOptions,
        timeLimit,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppProvider };
// eslint-disable-next-line react-refresh/only-export-components
export default useAppContext;
