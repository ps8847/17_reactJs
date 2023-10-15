import React , { useState } from "react";


const App = () => {

  const bgColor = '#8e44ad';
  const [bg , setbg] = useState(bgColor);
  const [name, setname] = useState('Click Me');

  const bgChange = () => {
    let newBg = '#34495e';
    setbg(newBg);
    setname('Ouch!! 😲')
  }

  const bgBack = () => {
    setbg(bgColor);
    setname('Ayyo!! 👌');
  }

  return (
    <div style = {{ backgroundColor : bg}}>
  <button onClick={bgChange} onDoubleClick={bgBack}>{name}</button>
  <button onMouseEnter={bgChange} onMouseLeave={bgBack}>{name}</button>
  </div>
  );
};

export default App;