import "./App.css";
import { useState } from "react";

//useInput custom hook takes in initialValue
function useInput(initialValue){
  //generate state value based on passed in initialValue
  const [value, setValue] = useState(initialValue);
  //return array that holds two items
  //first item is state value and onChange (properties for elements)
  //second item is cleanup function that resets values
  return [
    {value, onChange: e => setValue(e.target.value)},
    () => setValue(initialValue)
  ]
}

function App() {
  //use custom hook
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");

  const submit = (e) => {
    e.preventDefault();
    //pull value from properties
    alert(`${titleProps.value}, ${colorProps.value}`);
    //reset values to initial
    resetTitle();
    resetColor();
  };

  //use spread to push all properties into element from custom hook
  return (
    <form onSubmit={submit}>
      <input
        {...titleProps}
        type="text"
        placeholder="color title..."
      />
      <input
        {...colorProps}
        type="color"
      />
      <button>ADD</button>
    </form>
  );
}

export default App;
