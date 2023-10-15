import React, { useState } from "react";

const App = () => {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });

  const inputEvent = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setFullName((prev) => {
      if (name === "fname") {
        return { fName: value, lName: prev.lName };
      } else if (name === "lname") {
        return { fName: prev.fName, lName: value };
      }
    });
  };

  const onSubmits = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={onSubmits}>
        <div>
          <h1>
            Hello {fullName.fName} {fullName.lName}
          </h1>
          <input
            type="text"
            placeholder="Enter your first name"
            name="fName"
            onChange={inputEvent}
          />
          <input
            type="text"
            placeholder="Enter your last name"
            name="lName"
            onChange={inputEvent}
          />
          <button type="submit"> Click Me 👍</button>
        </div>
      </form>
    </>
  );
};

export default App;
