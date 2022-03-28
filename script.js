const quizData = [
    {
        question: "What is the name of Bender and Fry's apartment building?",
        a: "MotherBoard of Peace",
        b: "trick question",
        c: "Robot Arms",
        d: "00100100",
        correct: "c",
    },

    {
        question: "What Race is the sworn nemisis of the Niblonians?",
        a: "The Brain Spawn",
        b: "Omicronians",
        c: "Spheroids",
        d: "Decapodians",
        correct: "a",
    },

    {
        question: "Who is the 'Rocker-Jockey'?",
        a: "Petunia",
        b: "trick question",
        c: "Mom",
        d: "The Professor",
        correct: "c",
    },

    {
        question: "How many Episodes are in season 6?",
        a: "20",
        b: "16",
        c: "13",
        d: "4",
        correct: "d",
    },

    {
        question: "What is Dr. Zoidbergs's first name?",
        a: "Philip",
        b: "John",
        c:"Larry",
        d: "None of the Above.",
        correct: "b",
    },

    {
        question: "Where did fry get his name?",
        a: "Family name going back all the way to 'Minute Man Philip Fry'.",
        b: "Philip Hughes",
        c: "Screw driver",
        d: "Philip Simms",
        correct: "c",
    },

    {
        question: "Why doesn't anyone use pine trees for X-mas trees anymore?",
        a: "They were all cut down to make toilet paper during the 50 year squirts.",
        b: "They were all cut down to grow tall leafy trees when humans where enslaved by giraffes.",
        c: "They were all scorched during an alien invasion.",
        d: "All of the Above.",
        correct: "a",
    },

    {
        question: "What concert did Fry wait a thousand years to see?",
        a: "Butthole Surfers",
        b: "Beck",
        c: "Beastie Boys",
        d: "Neil Diamond",
        correct: "c",
    },

    {
        question: "What is Leela's Surname?",
        a: "Farnsworth",
        b: "Wong",
        c: "Alcazar",
        d: "Turanga",
        correct: "d",
    },

    {
        question: "What is Fry's brother's name?",
        a: "Bender",
        b: "Philip",
        c: "Adlai",
        d: "Yancey",
        correct: "d",
    },

    {
        question: "What is the name of the alien news anchor?",
        a: "Melllvar",
        b: "Morbo",
        c: "Kif",
        d: "Elzar",
        correct: "b",
    },

    {
        question: "Who is the ruler of Omicron persei 8?",
        a: "Jrrr",
        b: "Lrrr",
        c: "Grrl",
        d: "Ndnd",
        correct: "b",
    },

    {
        question: "Who was the first Emperor of the Moon?",
        a: "Richard Nixon",
        b: "Gunter",
        c: "Al Gore",
        d: "Philip J. Fry",
        correct: "c",
    },

    {
        question: "What is Bender's last name?",
        a: "Rodriguez",
        b: "Bender",
        c: "Robótica De La Madre",
        d: "Tijuana",
        correct: "a",
    },

    {
        question: "Where does Zap Branigan work?",
        a: "The Federation",
        b: "GOOP",
        c: "Planet Express",
        d: "DOOP",
        correct: "d",
    },
];

// creating hook for html elements
// const because these will not change
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
// this gives functionality to the questions
const questionEl = document.getElementById("question");
//these will give functionality to the answer options
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const submitBtn = document.getElementById("submit")

// let because this will change depending on the question
// the index starts at 0.
let currentQuiz= 0;
//created the score that starts at 0
let score = 0;

// calling  the function loadQuiz
loadQuiz();

//decalaring the function for loadquiz/ when it is called this is what will execute.
function loadQuiz() {
    //right after we load the quiz one of the choices will already be filled in this will deselect all until a user has clicked an option
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

//this clears the answer choices when you first load the question
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

//this loops through the choices and logs the selected answer
function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected()

    //check to see IF ANSWER is EQUAL TO the correct answer that is stated in the array(quizData)for the displayed question(currentQuiz) and look for the correct value
    if(answer) {
    if(answer === quizData[currentQuiz].correct) {
        score++
    }

    currentQuiz++

    // if there are still questions that have not been answered then proceed to the next question
    if(currentQuiz < quizData.length) {
        loadQuiz()
    } else {
        quiz.innerHTML = `
        <h2>You Answered  ${score} /${quizData.length} questions correctly!<h2>
        
        <button onclick="location.reload()">reload</button>
        `
    }

    }
})
