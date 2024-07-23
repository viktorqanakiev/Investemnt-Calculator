import { useState } from "react"
import Header from "./component/Header"
import UserInput from "./component/UserInput";
import Result from "./component/Result";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const inputIsValid = userInput.duration > 0;
  function handleChange(inputIndetifier, newValue) {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        //the + make sure that the newValue is integer because this event.target.value return string
        [inputIndetifier]: +newValue,
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange}/>
      {!inputIsValid && <p className="center">Please enter a duration greater than zero</p>}
      {inputIsValid && <Result input={userInput}/>}
    </>
  )
}

export default App
