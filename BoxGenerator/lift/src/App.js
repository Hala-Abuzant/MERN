import React, { useState } from "react";
import BoxForm from "./components/BoxForm";
import MessageDisplay from "./components/boxesDisplay";

function App() {
  const [arr, setArr] = useState([]);
  const addColor = (color) => {
    setArr([...arr, color]);
  };
  {console.log(arr)}

  return (
    <>
      <BoxForm addColor={addColor} />
      <boxesDisplay boxes={arr} />
    </>
  );
}

export default App;
