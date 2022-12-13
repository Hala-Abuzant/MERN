import React, { useState } from "react";
import BoxForm from "./components/BoxForm";
import BoxesDisplay from "./components/BoxesDisplay";

function App() {
  const [arr, setArr] = useState([]);

  const addColor = (color) => {
    setArr([...arr, color]);
  };
  
  {console.log(arr)}

  return (
    <>
      <BoxForm addColor={addColor} />
      <BoxesDisplay boxes={arr} />
     
    </>
  );
}

export default App;
