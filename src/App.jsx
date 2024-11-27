import Form from "./Form";
import FetchedData from "./FetchedData";
import useAppContext from "./AppContext";
function App() {
  const { isSubmitted, response } = useAppContext();
  return <div>{isSubmitted && response ? <FetchedData /> : <Form />}</div>;
}

export default App;
