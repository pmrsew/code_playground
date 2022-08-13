import "./App.css";
//useState to handle data
//useEffect to call for external data
import { useState, useEffect } from "react";

function App() {
  //create data container and function to set the data
  const[data, setData] = useState(null);
  useEffect(() => {
    //fetch() is built in and supported by browser
    //provides a way to make an HTTP request for data

    //once data is fetched, take response and turn it into JSON

    //once data is turned into Json, set it to data container
    fetch(`https://api.github.com/users/pmrsew`).then((response) => response.json()).then(setData);
  }, []) //empty array so api is only called on ONCE

  //check for data and return if exists using pre tag
  //pre tag is a preformatted tag for JSON
  if(data) return (<pre>{JSON.stringify(data, null,2)}</pre>);
  return (
    <h1>Data</h1>
  );
}

export default App;
