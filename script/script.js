let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },
    {
        "question": "Was ist die Bedeutung von HTML?",
        "answer_1": "Hyper Text Markup Language",
        "answer_2": "Highly Technical Machine Language",
        "answer_3": "Hyper Transfer Markup Language",
        "answer_4": "Home Tool Markup Language",
        "right_answer": 1
    },
    {
        "question": "Welche Programmiersprache wird hauptsächlich für das Styling von Webseiten verwendet?",
        "answer_1": "HTML",
        "answer_2": "CSS",
        "answer_3": "JavaScript",
        "answer_4": "Python",
        "right_answer": 2
    },
    {
        "question": "Was bedeutet CSS in Bezug auf Webdesign?",
        "answer_1": "Creative Style Sheets",
        "answer_2": "Cascading Style Sheets",
        "answer_3": "Computer Style Sheets",
        "answer_4": "Colorful Style Sheets",
        "right_answer": 2
    },
    {
        "question": "Welche Programmiersprache ermöglicht die Interaktion auf einer Webseite?",
        "answer_1": "HTML",
        "answer_2": "CSS",
        "answer_3": "JavaScript",
        "answer_4": "Java",
        "right_answer": 3
    },
    {
        "question": "Welche Dateierweiterung wird normalerweise für JavaScript-Dateien verwendet?",
        "answer_1": ".html",
        "answer_2": ".css",
        "answer_3": ".js",
        "answer_4": ".txt",
        "right_answer": 3
    },
    {
        "question": "Was ist der Zweck von JavaScript?",
        "answer_1": "Styling von Webseiten",
        "answer_2": "Datenbankverwaltung",
        "answer_3": "Interaktion auf Webseiten",
        "answer_4": "Videobearbeitung",
        "right_answer": 3
    },
    {
        "question": "Welche CSS-Eigenschaft wird verwendet, um den Hintergrund einer Webseite zu ändern?",
        "answer_1": "color",
        "answer_2": "font-size",
        "answer_3": "background-color",
        "answer_4": "border",
        "right_answer": 3
    }
];

let rightQuestions = 0;
let currentQuestion = 0;
let AUDIO_SUCCESS = new Audio('audio/right.mp3');
let AUDIO_FAIL = new Audio('audio/wrong.mp3')



function init() {
    document.getElementById('all-Questions').innerHTML = questions.length;
    showQuestion();
}

function showQuestion() {
    if (gameIsOver()) {
        showEndScreen();
    } else {
        updateProgressBar();
        updateToNextQuestion();
    }
}

function gameIsOver() {
    return currentQuestion >= questions.length
}

function showEndScreen() {
    document.getElementById('endScreen').style = '';
    document.getElementById('questionBody').style = 'display: none;';
    document.getElementById('amount-of-questions').innerHTML = questions.length;
    document.getElementById('amount-of-right-questions').innerHTML = rightQuestions;
    document.getElementById('header-image').src = './img/trophy.png';
}

function updateToNextQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('question-number').innerHTML = currentQuestion + 1;
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function updateProgressBar() {
    let percent = (currentQuestion + 1) / questions.length;
    percent = Math.round(percent * 100);
    document.getElementById('progress-bar').innerHTML = `${percent}%`;
    document.getElementById('progress-bar').style = `width: ${percent}%`;
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;
    if (rightAnswerSelected(selectedQuestionNumber)) {
        AUDIO_SUCCESS.play();
        document.getElementById(selection).parentElement.classList.add('bg-success');
        rightQuestions++;
    } else {
        AUDIO_FAIL.play();
        document.getElementById(selection).parentElement.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentElement.classList.add('bg-success');
    }
    document.getElementById('next-button').disabled = false;
}

function rightAnswerSelected(selectedQuestionNumber) {
    return selectedQuestionNumber == question['right_answer']
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showQuestion();
}

function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function restartGame() {
    rightQuestions = 0;
    currentQuestion = 0;
    document.getElementById('header-image').src = './img/pencil.jpg';
    document.getElementById('endScreen').style = 'display: none;';
    document.getElementById('questionBody').style = '';
    showQuestion()
}