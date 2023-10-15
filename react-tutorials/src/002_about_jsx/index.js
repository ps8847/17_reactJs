import React from 'react'; //used to use jsx
import ReactDOM from 'react-dom';


// method 1
//ReactDOM.render( < h1 > hello world Prince.. < /h1>, document.getElementById('root'));

//after compilation its look like this 

//method2
ReactDOM.render(React.createElement("h1", null, "Hello World Prince"), document.getElementById("root"));

// here "h1" will be created
// "null" represents the attribute name
// "Hello World Prince" represents the value of children

// method 3
// babel do this behind the scene
//var h1 = document.createElement('h1');
//h1.innerHTML = "Prince Sharma";
//document.getElementById("root").appendChild(h1);