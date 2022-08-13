import "./App.css";
import { useState, useEffect } from "react";

//query body used in request
const query = `
query{
  allLifts{
    name
    elevationGain
    status
  }
}
`;

//request options and body
const opts = {
  method: "POST",
  headers: {"Content-Type":"application/json"},
  body: JSON.stringify({query})
};

//function creates lift component for each row of data retrieved
function Lift({ name, elevationGain, status }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{elevationGain} {status}</p>
    </div>
  );
}

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  //website goes to a GraphQL Playground used to send requests for data
  useEffect(() => {
    setLoading(true);
    //pass into fetch() address AND request
    fetch(
      `https://snowtooth.moonhighway.com`,
      opts
    )
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error)
    return <pre>{JSON.stringify(error)}</pre>;
  if (!data) return null;

  console.log(data,"DATA!!!");

  //iterate over data and create Lift components with passed in properties
  return (
    <div>
      {data.data.allLifts.map((lift) => (
        <Lift 
          name={lift.name}
          elevationGain={lift.elevationGain}
          status={lift.status}
        />
      ))}
    </div>
  );
}

export default App;
