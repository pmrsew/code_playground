import "./App.css";
import { useState, useEffect } from "react";

function GithubUser({name, location, avatar}){
  return (
    <div>
      <h1>{name}</h1>
      <p>{location}</p>
      <img src={avatar} height={150} alt="Github user's, pmrsew, avatar"/>
    </div>
  );
}

function App() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch(`https://api.github.com/users/pmrsew`)
      .then((response) => response.json())
      .then(setData);
  }, []);

  //to use data pulled, pass into function that needs it
  if (data) return (
    <GithubUser name={data.name} location={data.location} avatar={data.avatar_url} />
  );

  return <h1>Data</h1>;
}

export default App;
