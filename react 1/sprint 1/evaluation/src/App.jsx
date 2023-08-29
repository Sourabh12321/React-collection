import {useState} from "react"
import Grocerydetails from "./Components/Grocerydetails";

function App() {
  const [value,setValue] = useState(true)
  return (
    <div className="App">
      {value?<button onClick={()=>{
        setValue(false);
      }}>Get Groceries</button>:<Grocerydetails/>}
      
    </div>
  );
}

export default App;
