//spread operator

const fullname = ["vinod", "thapa"];
const biodata = [1, ...fullname, 26, "male"];

console.log(fullname);
console.log(biodata);

// ************************
const shootergame = ["call of duty", "far cry", "residental evil"];
const racingames = ["need of speed", "gran turismo", "burnout"];
const games = [...shootergame, ...racingames];

console.log(games);

// *************************
const shootinggames = ["call of duty", "far cry", "residental evil"];
const [first, ...remaining] = shootinggames;
console.log(first); //call of duty
console.log(remaining);

// *************************

const fullName2 = {
  fname: "vinod",
  lname: "thapa",
};

const biodata2 = {
  id: 1,
  ...fullName2,
  age: 26,
  gender: "male",
};

console.log(biodata2);
