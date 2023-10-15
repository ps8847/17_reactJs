import React, { useState } from "react";

const App = () => {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
  });

  const inputEvent = (event) => {
    const { value, name } = event.target;

    setFullName((prev) => {
      //console.log(prev);
      return {
        ...prev,
        [name]: value,
      };
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
          <h3>{fullName.email}</h3>
          <h4>{fullName.phone}</h4>
          <input
            type="text"
            placeholder="Enter your first name"
            name="fName"
            onChange={inputEvent}
            //value={fullName.fName}
          />
          <input
            type="text"
            placeholder="Enter your last name"
            name="lName"
            onChange={inputEvent}
            //value={fullName.lName}
          />
          <input
            type="email"
            placeholder="Enter your last name"
            name="email"
            onChange={inputEvent}
            //value={fullName.email}
          />
          <input
            type="number"
            placeholder="Enter your last name"
            name="phone"
            onChange={inputEvent}
            //value={fullName.phone}
          />
          <button type="submit"> Click Me 👍</button>
        </div>
      </form>
    </>
  );
};

export default App;
