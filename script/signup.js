console.log("signup.js");

import Navbar from "../Component/Navbar.js";
import Form from "../Component/Form.js";
// add navbar import from Navbar.js
const navBox = document.querySelector("#nav");
navBox.innerHTML = Navbar();

let formBox = document.querySelector("#form-box");
formBox.innerHTML = Form();
 




// select form tag  
let form = document.querySelector("#form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // onSubmit this function is called
  handelSubmit();
});
const handelSubmit = () => {
  let username = form.username.value;
  let password = form.password.value;
  // if username or password inputs fields are empty
  if (!username || !password) {
    alert("Please enter valid username and password");
    return;
  } else {
    // Check if username or password is already registered or not
    let registered = checkuser(username, password);
    if (registered) {
      alert("Already Registered");
    } else {
      // add new user data
      addUser(username, password);
    }
  }
  console.log(username, password);
};
// check user is already registered or not
const checkuser = (username) => {
  let usersDetails = JSON.parse(localStorage.getItem("usersDetails")) || [];
  let data = usersDetails.filter((e) => e.username == username);
  if (data.length > 0) {
    return true;
  }
  return false;
};
// add new user to local storage with key =  usersDetails
let addUser = (username, password) => {
  let usersDetails = JSON.parse(localStorage.getItem("usersDetails")) || [];
  usersDetails.push({ username: username, password: password });
  localStorage.setItem("usersDetails", JSON.stringify(usersDetails));
  alert("Signup successful");
  location.href = "./login.html";
};
