var quesArray = [
    {
        num: 1,
        question: "Our both hands have ---------- fingers?",
        option: {
            a: "4",
            b: "6",
            c: "10",
            d: "8",

        },
        answer: "10",
    },
    {
        num: 2,
        question: "We smell food with ---------- ?",
        option: {
            a: "Ear",
            b: "Nose",
            c: "Eyes",
            d: "Tounge",

        },
        answer: "Nose"
    },
    {
        num: 3,
        question: "A human body has ---------- legs?",
        option: {
            a: "4",
            b: "2",
            c: "1",
            d: "3",

        },
        answer: "2"
    }
    ,
    {
        num: 4,
        question: "Who is the present president of pakistan",
        option: {
            a: "Arif Alvi",
            b: "Imran Khan",
            c: "Nawaz Sharif",
            d: "Asif Ali Zardari",

        },
        answer: "Arif Alvi"
    }
    ,
    {
        num: 5,
        question: "How many prayers in a day:",
        option: {
            a: "6",
            b: "5",
            c: "3",
            d: "none",

        },
        answer: "5"
    },
    {
        num: 6,
        question: "How many total surah in Quran",
        option: {
            a: "113",
            b: "114",
            c: "112",
            d: "111",

        },
        answer: "114"
    },
    {
        num: 7,
        question: "We use neck to move ---------- ?",
        option: {
            a: "Hand",
            b: "Foot",
            c: "Head",
            d: "Finger",

        },
        answer: "Head"
    }
]
var askButton = document.querySelector(".askButton");
var detailSec = document.querySelector(".detailSec");
var resultWrapper = document.querySelector(".resultWrapper");
var quizQues = document.getElementById("quizQues");
var quizOptions = document.getElementById("quizOptions").children;
var nextBtn = document.getElementById("nextBtn");

var totalQuesElement = document.getElementById("totalQuesElement");
var correctAnsElement = document.getElementById("correctAnsElement");
var wrongAnsElement = document.getElementById("wrongAnsElement");
var totalScoreElement = document.getElementById("totalScoreElement");

var counter = 0;
var correctAnsCounter = 0;
var wrongAnsCounter = 0;
var totalScore = 0;

for (var li of quizOptions) {
    li.setAttribute("onclick", "selectOption(this)")
}

function formHandler() {
    var formWrapper = document.querySelector(".formWrapper");
    var inputFields = formWrapper.querySelectorAll("input");
    for (var input of inputFields) {
        console.log("input", input.value)
        if (!input.value) {
            alert("Enter required fields")
            return
        }
    }
    formWrapper.style.display = "none"
    askButton.style.display = "flex"
}
function quizStart() {
    nextBtn.style.display = "none"
    askButton.style.display = "none"
    detailSec.style.display = "flex"
    
    quizQues.innerHTML = quesArray[counter].question
    quizOptions[0].innerHTML = quesArray[counter].option.a
    quizOptions[1].innerHTML = quesArray[counter].option.b
    quizOptions[2].innerHTML = quesArray[counter].option.c
    quizOptions[3].innerHTML = quesArray[counter].option.d
}

function nextQues() {
    if (counter < quesArray.length - 1) {
        counter++
        quizQues.innerHTML = quesArray[counter].question
        quizOptions[0].innerHTML = quesArray[counter].option.a
        quizOptions[1].innerHTML = quesArray[counter].option.b
        quizOptions[2].innerHTML = quesArray[counter].option.c
        quizOptions[3].innerHTML = quesArray[counter].option.d
    } else {
        //show result screen
        detailSec.style.display = "none"
        resultWrapper.style.display = "flex"
        //set result values
        totalQuesElement.innerHTML = quesArray.length
        correctAnsElement.innerHTML = correctAnsCounter
        wrongAnsElement.innerHTML = wrongAnsCounter
        totalScoreElement.innerHTML = totalScore
    }
    for (var li of quizOptions) {
        li.classList.remove("disableLi")
        li.classList.remove("wrongAns")
        li.classList.remove("correctAns")
    }
    nextBtn.style.display = "none"
}

function selectOption(element) {
    if (element.innerHTML === quesArray[counter].answer) {
        correctAnsCounter++
        totalScore += 5
        console.log("answer true")
        element.className = "correctAns"
    } else {
        wrongAnsCounter++
        console.log("answer false")
        element.className = "wrongAns"
        for (var li of quizOptions) {
            console.log(li.innerHTML)
            if (li.innerHTML === quesArray[counter].answer) {
                li.classList.add("correctAns")
                break
            }
        }
    }
    for (var li of quizOptions) {
        li.classList.add("disableLi")
    }
    nextBtn.style.display = "block"
}