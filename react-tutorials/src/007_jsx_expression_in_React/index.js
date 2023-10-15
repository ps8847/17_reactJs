import React from "react"; //used to use jsx
import ReactDOM from "react-dom";

/* the main topic is that 
  firstly, we need to understand that
  we are in a javascript file >>>
  and we are using a html element inside .render Element
  means,,,, in javascript file we are using html > which is usually not possible

  so, today our topic is that 
  in this jaavscript file, we are using html  >>> and if we want to use javascipt inside that html element , than how can we do that?


  by using {} inside html element;
  we can easily use expresions here
  we can't use statements here >>> like >> if, else and all other statement types
*/
const fname = "Prince";
const lname = "sharma";

/*

EXAMPLE 1:

ReactDOM.render(
  <h1>
    my name is {fname} and last name is {lname}
  </h1>,
  document.getElementById("root")
);
*/

//EXAMPLE 2:

ReactDOM.render(
  <>
    <h1>
      my name is {fname} and last name is {lname}{" "}
    </h1>
    <p>my Addition is {5 + 2}</p>
    <p>my Division is {5 / 2}</p>
    <p>my Subtraction is {5 - 2}</p>
    <p>my Multiply is {5 * 2}</p>
    <p>my Random number is {Math.random()}</p>
  </>,
  document.getElementById("root")
);
