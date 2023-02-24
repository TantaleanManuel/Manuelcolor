import { useState } from 'react'
import './App.css'

function App() {

  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");

  const handleClick = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setBackgroundColor(randomColor);
  };


  return (
    <div className="App">


      <div className="container" style={{ backgroundColor }}>
      <button className="button" onClick={handleClick}>
        Change background color
      </button>
      <hr />
      <button className="button" >
        Manuel Tantalean
      </button>
    </div>






    </div>
  )
}

export default App
