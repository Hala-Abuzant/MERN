import React, { useState } from 'react'

const Tabs = (props) => {

    const appArr = [
        { label: "Tab 1", value: "this is Tab 1" },
        { label: "Tab 2", value: "this is Tab 2" },
        { label: "Tab 3", value: "this is Tab 3" },
      ]; 
      
  return (
    <div>

        {/* { props.tabs.map((tab, i) =>  */}
        {  appArr.map((tab, i) => 
        <div onClick={(e) => props.selectTab(tab)} key={ i }>   { tab.label }   </div>)}

    </div>
    
  )

  
}

export default Tabs