import "./App.css";
import { useRef } from "react";

function App() {
  //variables used to reference the current value of elements
  //returns current value of object it's assigned
  const txtTitle = useRef();
  const hexColor = useRef();

  console.log(txtTitle);


  const submit = (e) => {
    //preventDefault() stops the page from refreshing after submit
    e.preventDefault();
    //use current.value to pull information into a useable format and assign to variables
    const title = txtTitle.current.value;
    const color = hexColor.current.value;
    //display a popup alert
    alert(`${title}, ${color}`);
    //after closing the popup alert, values are set back to default
    txtTitle.current.value="";
    hexColor.current.value="";
  };

  return (
    //onSubmit={submit} - change onSubmit to complete function above
    //ref property is used to tie references to specified elements
    <form onSubmit={submit}>
      <input
        ref={txtTitle}
        type="text"
        placeholder="color title..."
      />
      <input ref={hexColor} type="color"/>
      <button>ADD</button>
    </form>
  );
}

export default App;
