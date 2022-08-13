import "./App.css";

//array of data to display
const tahoe_peaks = [
  {name: "Freel", elevation: 10891},
  {name: "Monument", elevation: 10067},
  {name: "Pyramid", elevation: 9983},
  {name: "Tallac", elevation: 9735}
];

//function that takes in:
//data array
//function to help render an individual list item
//what will be displayed if array is empty
//returns data as unordered list unless empty
function List({data, renderItem, renderEmpty}){
  return !data.length ? renderEmpty:(
    <ul>
      {data.map((item) => (
        <li key={item.name}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

function App() {
  
  //calling on List function and passing in required arguments
  return (
    <List 
      data={tahoe_peaks}
      renderEmpty={<p>This list is empty</p>}
      renderItem={(item) => (
        <>
          {item.name} - {item.elevation} ft.
        </>
      )}
    />
  );
}

export default App;
