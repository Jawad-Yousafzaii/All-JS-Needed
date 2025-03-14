let Myname = "Jawad Ahmad";
let MyAge = 22;
console.log(`My Name Is ${Myname} and my age is ${MyAge}`);

//Loops

// For Loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// While Loop
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// changin button using doom
function changeText() {
  document.getElementById("heading").innerText = "Text Changed!";
}

function changePara() {
  document.getElementById("pera").innerText = "Hi Paragraph Changed ";
}

//event
document.getElementById("mYButton").addEventListener("click", function () {
  alert("Button Clicked");
});
//Hover Using JavaScript
document.getElementById("mYButton").addEventListener("mouseover", function () {
  style = document.getElementById("mYButton").style;
  style.backgroundColor = "red";
  style.color = "blue";
});
//onmouseleave
document.getElementById("mYButton").addEventListener("mouseleave", function () {
  style = document.getElementById("mYButton").style;
  style.backgroundColor = "white";
  style.color = "black";
});

//using E6S+
// let name = "Ali";
// console.log(`helo my name is ${name}`);
// for (i = 1; i <= 10; i++) {
//   console.log(name, +i);
// }

const ali = { name: "ali khan", age: 20 };
const { name, age } = ali;
console.log(name, age);

// JavaScript (Promises & Async/Await)
// Promise Version
function fetchData() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => console.log(users))
    .catch((error) => console.log(error));
}
fetchData();

// Promise Version
function fetchData() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => console.log(users))
    .catch((error) => console.log(error));
}
fetchData();

// Real-Life Example (API Call with Async/Await)
async function getUserData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    let user = await response.json();
    console.log(user);
  } catch (error) {
    console.log("Error fetching user data:", error);
  }
}
getUserData();
