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
        "question": "Welche der folgenden ist KEIN gültiger HTML-Tag?",
        "answer_1": "<div>",
        "answer_2": "<p>",
        "answer_3": "<section>",
        "answer_4": "<click>",
        "right_answer": 4
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
        "question": "Welches HTML-Tag wird verwendet, um eine Liste mit nummerierten Punkten zu erstellen?",
        "answer_1": "<ul>",
        "answer_2": "<ol>",
        "answer_3": "<li>",
        "answer_4": "<p>",
        "right_answer": 2
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

let currentQuestion = 0;


function init() {
    document.getElementById('allQuestions').innerHTML = questions.length;
    showQuestion();
}

function showQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}