import React from "react";
import ReactDOM from "react-dom";
//import youtuber from "./App";
//import kushBhi from "./App";

//import youtuber, { favProg } from "./App";

//import youtuber, { favProg, myName, mySurName } from "./App";

import * as prince from "./App";

ReactDOM.render(
  <>
    <ol>
      <li> Prince </li>
      {/*<li> {youtuber}</li>*/}
      {/*<li> {kushBhi}</li>*/}

      {/*<li>{youtuber}</li>
      <li>{favProg}</li>
      <li>{myName()}</li>
      <li>{mySurName()}</li>*/}

      {/*// default means youtuber*/}
      <li>{prince.default}</li>
      <li>{prince.favProg}</li>
      <li>{prince.myName()}</li>
      <li>{prince.mySurName()}</li>
    </ol>
  </>,
  document.getElementById("root")
);
