
import React from "react";
import ChildComponent1 from "./ChildComponent1.js"
import ChildComponent2 from "./ChildComponent2.js"
import './../styles/App.css';

const App = () => {
  const [option,setOption] = React.useState('')
  function handleOption(random){
    setOption(random)
  }
  return (
    <div>
        {/* Do not remove the main div */}
    <ChildComponent1 handleOption={handleOption}/>
    <ChildComponent2 handleOption={handleOption}/>
    </div>
  )
}

export default App
