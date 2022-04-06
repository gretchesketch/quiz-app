const quizData = [
    {
        question: "1/15: What is the name of Bender and Fry's apartment building?",
        a: "MotherBoard of Peace",
        b: "trick question",
        c: "Robot Arms",
        d: "00100100",
        correct: "c",
    },

    {
        question: "2/15: What Race is the sworn nemisis of the Niblonians?",
        a: "The Brain Spawn",
        b: "Omicronians",
        c: "Spheroids",
        d: "Decapodians",
        correct: "a",
    },

    {
        question: "3/15: Who is the 'Rocker-Jockey'?",
        a: "Petunia",
        b: "trick question",
        c: "Mom",
        d: "The Professor",
        correct: "c",
    },

    {
        question: "4/15: How many Episodes are in season 6?",
        a: "20",
        b: "16",
        c: "13",
        d: "4",
        correct: "d",
    },

    {
        question: "5/15: What is Dr. Zoidbergs's first name?",
        a: "Philip",
        b: "John",
        c:"Larry",
        d: "None of the Above.",
        correct: "b",
    },

    {
        question: "6/15: Where did fry get his name?",
        a: "Family name going back all the way to 'Minute Man Philip Fry'.",
        b: "Philip Hughes",
        c: "Screw driver",
        d: "Philip Simms",
        correct: "c",
    },

    {
        question: "7/15: Why doesn't anyone use pine trees for X-mas trees anymore?",
        a: "They were all cut down to make toilet paper during the 50 year squirts.",
        b: "They were all cut down to grow tall leafy trees when humans where enslaved by giraffes.",
        c: "They were all scorched during an alien invasion.",
        d: "All of the Above.",
        correct: "a",
    },

    {
        question: "8/15: What concert did Fry wait a thousand years to see?",
        a: "Butthole Surfers",
        b: "Beck",
        c: "Beastie Boys",
        d: "Neil Diamond",
        correct: "c",
    },

    {
        question: "9/15: What is Leela's Surname?",
        a: "Farnsworth",
        b: "Wong",
        c: "Alcazar",
        d: "Turanga",
        correct: "d",
    },

    {
        question: "10/15: What is Fry's brother's name?",
        a: "Bender",
        b: "Philip",
        c: "Adlai",
        d: "Yancey",
        correct: "d",
    },

    {
        question: "11/15: What is the name of the alien news anchor?",
        a: "Melllvar",
        b: "Morbo",
        c: "Kif",
        d: "Elzar",
        correct: "b",
    },

    {
        question: "12/15: Who is the ruler of Omicron persei 8?",
        a: "Jrrr",
        b: "Lrrr",
        c: "Grrl",
        d: "Ndnd",
        correct: "b",
    },

    {
        question: "13/15: Who was the first Emperor of the Moon?",
        a: "Richard Nixon",
        b: "Gunter",
        c: "Al Gore",
        d: "Philip J. Fry",
        correct: "c",
    },

    {
        question: "14/15: What is Bender's last name?",
        a: "Rodriguez",
        b: "Bender",
        c: "Robótica De La Madre",
        d: "Tijuana",
        correct: "a",
    },

    {
        question: "15/15: Where does Zap Branigan work?",
        a: "The Federation",
        b: "GOOP",
        c: "Planet Express",
        d: "DOOP",
        correct: "d",
    }
];












// creating hook for html elements
const highScore = document.getElementById("high-score")
// const because these will not change
// the value (name/ID) is in quotes and inside the parenthesis sent as an argument 
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

//this is keeping up with the score
localStorage["score1"] = score

//this if statemnt is using the DOM to call the body of the html document with counter in it to differentiate the different files.
//Since counter is not used in the score.html file it will load quiz for the correct index.html file.
if(document.body.contains(document.getElementById("counter"))) {
    console.log("about to load quiz")
   // calling  the function loadQuiz
    loadQuiz();
}
    


highScore.innerHTML=`
<ul>
    <li>1.  ${window.localStorage.getItem("highscore1_name")}: ${window.localStorage.getItem("highscore1")}</li>
    <li>2.  ${window.localStorage.getItem("highscore2_name")}: ${window.localStorage.getItem("highscore2")}</li>
    <li>3.  ${window.localStorage.getItem("highscore3_name")}: ${window.localStorage.getItem("highscore3")}</li>
</ul>
`






//decalaring the function for loadquiz/ when it is called this is what will execute.
function loadQuiz() {

    //right after we load the quiz, one of the choices will already be filled in. this will deselect all until a user has clicked an option
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

//this loops through the choices and logs the user's selected answer
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

// this gave us an error, so we embedded it in an IF statement that checks which html document is open.
if(document.body.contains(document.getElementById("counter"))) {
    submitBtn.addEventListener("click", () => {
        const answer = getSelected()

        //check to see IF ANSWER is EQUAL TO the correct answer that is stated in the array(quizData)for the displayed question(currentQuiz) and look for the correct value
        if(answer) {
            if(answer === quizData[currentQuiz].correct) {
                score++
                // score is kept in local storage because this same JS is accessed again by multiple html pages (score is zeroed out at the top)
                localStorage.setItem("mostRecentScore", score);
                console.log("local variable score: " + score + " local storage item mostRecentScore: " + localStorage.getItem("mostRecentScore"));

            }

            currentQuiz++

            // if there are still questions that have not been answered then proceed to the next question
            if(currentQuiz < quizData.length) {
                loadQuiz()
            } else {
                // If all the questions have been answered then display the score by directly defining html
                quiz.innerHTML = `
                <h2>You Answered  ${score}/${quizData.length} questions correctly!<h2>

                <a href="score.html">
                <button>Enter Score</button>
                </a>
                `
            }
            window.localStorage.setItem("mostRecentScore", score);
        }
    }) 
};

//differentiates the pages so it won't keep trying to apply the quiz page properties to the score page
    //this is making the local storage for the score a variable that can be called multiple times

    //score file
    //getting hooks for score.html
   // const username = document.getElementById("name");
    //const saveScore = document.getElementById("saveScore");
   // const finalScore = document.getElementById("finalScore");
   // const mostRecentScore =localStorage.getItem("mostRecentScore");
    //localStorage.setItem("highScores", JSON.stringify([]));
    //finalScore.innerText = mostRecentScore;
    //storing name data
    //username.addEventListener("keyup", () => {
    //})
    //

if(document.body.contains(document.getElementById("finalScore"))) {
    saveScoreBtn.addEventListener("click", e => { 
        e.preventDefault();
        let score2 = localStorage.getItem("mostRecentScore")
        console.log(score2);
        document.getElementById("finalScore").textContent += score2; 
        e.preventDefault();
        //creating a variable that is the form input with the user input in it
        let userNameEntry = saveNameAndScoreForm.elements["name"].value;

        //console.log("it gets here");
        //console.log(window.localStorage.getItem("highscore3"));
        if(window.localStorage.getItem("highscore3") == 'null' | score2 >= window.localStorage.getItem("highscore3")) {
            //console.log("true If 3 null | > 3")
            if(window.localStorage.getItem("highscore2") == 'null' | score2 >= window.localStorage.getItem("highscore2")) {
                //console.log("true If 2 null | > 2")
                window.localStorage.setItem("highscore3", window.localStorage.getItem("highscore2"))
                window.localStorage.setItem("highscore3_name", window.localStorage.getItem("highscore2_name"))
                if(window.localStorage.getItem("highscore1") == 'null' | score2 >= window.localStorage.getItem("highscore1")) {
                    //console.log("true If 1 null | > 1")
                    window.localStorage.setItem("highscore2", window.localStorage.getItem("highscore1"))
                    window.localStorage.setItem("highscore2_name", window.localStorage.getItem("highscore1_name"))
                    window.localStorage.setItem("highscore1", score2)
                    window.localStorage.setItem("highscore1_name", userNameEntry)
                } else {
                    //console.log("false If 1 null | < 1")
                    window.localStorage.setItem("highscore2", score2)
                    window.localStorage.setItem("highscore2_name", userNameEntry)
                }
            } else {
            //console.log("false If 2 null | < 2")

            window.localStorage.setItem("highscore3", score2)
            window.localStorage.setItem("highscore3_name", userNameEntry)
            }
        }
        //console.log("but then skips all the logic?");


        document.location = "index.html"


        //if(localStorage.getItem("highscore1") == null){
          /*  localStorage.setItem("highscore1", score2)
            localStorage.setItem("highscore1_name", userNameEntry)
        } else {
            if(score2 > localStorage.getItem("highscore1")) {

            }
        }*/

        //this is creating a variable that is displaying the users name "" and calling the previous variable stringing it with the score
        //let highScoreEntry = ("" + userNameEntry + ": highscore: " + score2);
         //this is using local storage to store/set the previous variable properties
        //localStorage.setItem("highscore1", highScoreEntry)
        //this is getting the data that was stored
        
    });
};