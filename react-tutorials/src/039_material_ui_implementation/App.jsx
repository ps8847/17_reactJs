import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";

const App = () => {
  const [number, setnumber] = useState(0);

  const incNum = () => {
    setnumber(number + 1);
  };

  const dicNum = () => {
    if (number > 0) {
      setnumber(number - 1);
    } else {
      alert("zero limit reached!!");
      setnumber(0);
    }
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1> {number} </h1>
          <div className="btn_div">
            <Tooltip title="Add">
              <Button onClick={incNum} className="btn_green">
                <AddIcon />
              </Button>
            </Tooltip>

            <Tooltip title="Delete">
              <Button onClick={dicNum} className="btn_red">
                <DeleteIcon />
              </Button>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
