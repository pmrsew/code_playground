import "./App.css";

const [firstCity, secondCity] = ["Tokyo", "Tahoe City", "Bend"];

//console.log(cities[0]);
console.log(firstCity);
console.log(secondCity);

function App({library}) {
  return (
    <div className="App">
      <h1>Hello from {library}</h1>
    </div>
  );
}

export default App;
