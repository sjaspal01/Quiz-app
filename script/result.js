console.log("result.js");
// get the user otin answer and corrrect ans from local storage
let result = JSON.parse(localStorage.getItem("result")) || [];
// console.log(result);
let resultBox = document.querySelector("#result-box");

if (result.length == 0) {
  resultBox.innerHTML = "Plz Attemp first";
} else {
  display(result);
}
// function for display the result Cards
function display(result) {
  resultBox.innerHTML = "";
  result.forEach((e, i) => {
    let div = document.createElement("div");
    div.setAttribute("class", "card-result");
    let que = document.createElement("h3");
    que.innerText = i + 1 + ") " + e.question;
    let ans = document.createElement("p");
    ans.innerText = "Answer" + " ->" + e.answer;
    let myans = document.createElement("p");
    myans.innerText = "My-Answer" + "-> " + e.myans;
    div.append(que, ans, myans);
    resultBox.append(div);
  });
}
