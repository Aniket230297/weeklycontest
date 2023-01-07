/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

let arr2 = [
  { id: 'A', name: "aniket", age: "30", profession: "designer" },
  { id: 'B', name: "onkar", age: "23", profession: "admin" },
  { id: 'C', name: "mayur", age: "29", profession: "developer" },
];


function PrintDeveloperswithMap() {
  //Write your code here
}

function PrintDeveloperbyForEach() {
  //Write your code here
  arr.forEach(function (e){
    if(e.profession == developer){
     console.log(e.arr);
    }
   });
   console.log(arr[0]);
 
}

function addData() {
  //Write your code here
  let intern = { id: 4, name: "susan", age: "20", profession: "intern" }
  arr.push(intern);
  console.log(arr);

}

function removeAdmin() {
  //Write your code here
  arr.splice(2);
  console.log(arr);
}

function concatenateArray() {
  //Write your code here
  const arr3= arr.concat(arr2);
  console.log(arr3);
}
