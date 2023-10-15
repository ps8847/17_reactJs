import React from 'react'; //used to use jsx
import ReactDOM from 'react-dom';


// method 1
//ReactDOM.render( <div >
//	<h1> hello world Prince.. </h1> 
//	<p>this is paragraph tag</p >
//    </div>,document.getElementById('root'));

//these are jsx elements  >> h1,p    
//in jsx we can only use single elemnt , so we can bound them in single elemnt by wrapping them in div tag


// method2
ReactDOM.render(
    [
      <h1> hello world Prince.. </h1>,
      <p> this is paragraph tag </p>,
      <p> hello world again in p tag</p>,
      <pre> this is pre tag </pre>,
    ],
    document.getElementById("root")
  );