const quizData = [{
    question: "Which of the following keywords is used to define a variable in Javascript? ",
    a: "var",
    b: "let",
    c: "A & B",
    d: "JavaScript",
    correct: "c",
},
{
    question: "Which of the following methods is used to access HTML elements using Javascript?",
    a: "getElementById()",
    b: "getElementByClassName()",
    c: "A & B",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "c",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    question: "How can a datatype be declared to be a constant type?",
    a: "const",
    b: "var",
    c: "let",
    d: "Constat",
    correct: "a",
},
{
    question: "When an operator’s value is NULL, the typeof returned by the unary operator is?",
    a: "Boolean",
    b: "Undefined",
    c: "Object",
    d: "Integer",
    correct: "c",
},
{
    question: "Which function is used to serialize an object into a JSON string in Javascript?",
    a: "stringfy()",
    b: "parse()",
    c: "convert()",
    d: "none ",
    correct: "a",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
},
{
    question: "Which of the following are closures in Javascript?",
    a: "variable",
    b: "Function",
    c: "Objects",
    d: "All Of the above",
    correct: "a",
},
{
    question: "What keyword is used to declare an asynchronous function in Javascript?",
    a: "async",
    b: "await",
    c: "setTimeout",
    d: "None",
    correct: "a",
}
];

// On Load make Result To Zero   Do not forget 



window.onload=()=>{
    localStorage.setItem("result",JSON.stringify([]))
}
// index represent the Question Number
let index = 0;

// No of Correct answers
let correct = 0,
// no of InCorrect answers

incorrect = 0,
// Total number of Question

total = quizData.length;
let questionBox = document.getElementById("questionBox");
// selecting the all input by class name which gives us an array 
let allInputs = document.querySelectorAll("input[type='radio']")

const loadQuestion = () => {
if (total === index) {
    // if the last question is come then quizend will trigger
    return quizEnd()
}
// making input box values = false;
reset()
// getting index value and load that particular question present on that index
const data = quizData[index]
// inserting question number and question
questionBox.innerHTML = `${index + 1}) ${data.question}`
// inserting options from data of question
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}


document.querySelector("#skip").addEventListener("click",()=>{
    let result=JSON.parse(localStorage.getItem("result"))||[];
    const data = quizData[index]
    incorrect++;
        result.push({question:data.question, answer:data[data.correct],myans:"Not-Aswered"})
        localStorage.setItem(  "result",JSON.stringify(result));
        index++;
    loadQuestion()
})

document.querySelector("#submit").addEventListener(
"click",
 ()=> {
    let result=JSON.parse(localStorage.getItem("result"))||[];
    const data = quizData[index]
    console.log(data)
    const ans = getAnswer()
    if(!ans){
        return
    }
    // console.log(data[ans])
    if (ans === data.correct) {
        result.push({question:data.question, answer:data[data.correct],myans:data[ans]})
        localStorage.setItem("result",JSON.stringify(result));
        correct++;
    } else {
        incorrect++;
        result.push({question:data.question, answer:data[data.correct],myans:data[ans]})
        localStorage.setItem(  "result",JSON.stringify(result));
    }
    index++;
    loadQuestion()
}
)



const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}
// after the question is over
const quizEnd = () => {
 
document.getElementsByClassName("container")[0].innerHTML = `
    <div id="res">
        <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
    </div>
    <a href="/result.html"><h2>Check Answer Key and Improve</h2></a>
`
}

loadQuestion(index);