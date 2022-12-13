
import './App.css';
import Tabs from './components/Tabs';
import Info from './components/Info';
import React, { useState } from 'react';

function App() {

  const [tab, setTab] = useState("");

  // const appArr = [
  //   { label: "Tab 1", value: "this is Tab 1" },
  //   { label: "Tab 2", value: "this is Tab 2" },
  //   { label: "Tab 3", value: "this is Tab 3" },
  // ];

  return (
    <div className="App">
      <>
        {/* <Tabs tabs = {appArr} selectTab = {setTab}/> */}
        <Tabs  selectTab = {setTab}/>

        <Info data = {tab}/>

      </>
    </div>
  );
}

export default App;
