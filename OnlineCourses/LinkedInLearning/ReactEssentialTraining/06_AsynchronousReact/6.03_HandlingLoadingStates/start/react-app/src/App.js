import "./App.css";
import { useState, useEffect } from "react";

function GithubUser({ name, location, avatar }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{location}</p>
      <img src={avatar} height={150} alt={name} />
    </div>
  );
}

function App() {
  const [data, setData] = useState(null);

  //handling state of API data
  const[error, setError] = useState(null);
  const[loading, setLoading] = useState(null);

  //handle loading at beginning and end of fetch
  //.catch can be used to catch errors within the chain
  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/users/moonhighway`)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, []);

  //what webpage is displaying based on state of data
  if(loading) return <h1>Loading...</h1>;
  if(error) return <pre>{JSON.stringify(error)}</pre>;
  if(!data) return null;
  
  return (
    <GithubUser
      name={data.name}
      location={data.location}
      avatar={data.avatar_url}
    />
  );
}

export default App;
