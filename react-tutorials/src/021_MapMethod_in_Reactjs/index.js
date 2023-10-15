const arr = ["vinod", "bahadur", "thapa"];
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

const newArr = arr.map(function (cval) {
  return cval;
});

const newArr2 = arr.map(function (cval) {
  return cval + "thapa";
});

const newArr3 = arr.map(function (cval, index) {
  return cval + " : " + index;
});

const newArr4 = arr.map(function (cval, index, arrayName) {
  return cval + " : " + index;
});

console.log(newArr);
console.log(newArr2);
console.log(newArr3);
console.log(newArr4);

const studentData = [
  { id: 1, name: "vinod", degree: "MCS" },
  { id: 2, name: "Thapa", degree: "BCS" },
  { id: 1, name: "ThapaTechnical", degree: "CS" },
];

//console.log(studentData[0].name);

const newData = studentData.map((cValue) => {
  return `My name is ${cValue.name}`;
});

console.log(newData);
