console.log("login js");
import Form from "../Component/form.js";
import Navbar from "../Component/Navbar.js";
// adding navbar import from Navbar.js
const navBox = document.querySelector("#nav");
navBox.innerHTML = Navbar();
// adding form import from Form.js
let formBox = document.querySelector("#form-box");
formBox.innerHTML = Form();

let form = document.querySelector("#form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let username = form.username.value;
  let password = form.password.value;
//   if input is empty
  if (!username || !password) {
    alert("Please enter a username and password");
    return;
  }
//   after submit button
  handelSubmit(username, password);
});

const handelSubmit = (username, password) => {
    // check password and username is correct or not
  let validate = check(username, password);
  if (validate) {
    alert("Login Sucesssfull Ready For Quiz");
    location.href = "./quiz.html";
  } else {
    alert("please check credentials");
  }
};
// check password and username function
const check = (username, password) => {
    // get details list users
  let usersDetails = JSON.parse(localStorage.getItem("usersDetails")) || [];
//   console.log(usersDetails);
  let data = usersDetails.filter(
    (e) => e.username == username && e.password == password
  );
  if (data.length > 0) {
    return true;
  }
  return false;
};
