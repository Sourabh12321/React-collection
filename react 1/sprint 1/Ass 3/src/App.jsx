import Fiction from "./components/Fiction";
import {useState} from "react"
import NonFiction from "./components/NonFiction";



function App() {
  const [value,setValue] = useState(true);
  return (
    <div>
      <h1>Mini Book Store</h1>
      <button data-testid="toggle-btn" onClick={()=>{
        value?setValue(false):setValue(true);
      }}>{value?"Show NonFictional Books":"Show Fictional Books"}</button>
      {value?<Fiction/>:<NonFiction/>}
      
      <div data-testid="conditional-container">
        {/* Render either Fiction or NonFiction Based on the Condition */}
      </div>
    </div>
  );
}

export default App;
