const quizData = [
  {
    question: "What does HTML stand for?",
    a: "Hypertrophic Management Language",
    b: "Hyperberic Tertiary Logrithm",
    c: "Hypertext Markup Language",
    d: "Hyperresonant Marginal Logrithm",
    correct: "c",
  },
  {
    question:
      "Which option is used to create a horizontal ruler in a web page?",
    a: "<p>",
    b: "<hr>",
    c: "<ul>",
    d: "<ol>",
    correct: "b",
  },
  {
    question: "Apart from <b> tag, what other tag makes text bold ?",
    a: "<fat>",
    b: "<strong>",
    c: "<black>",
    d: "<emp>",
    correct: "b",
  },
  {
    question: "What tag is used to display a picture in a HTML page?",
    a: "<src>",
    b: "<image>",
    c: "<picture>",
    d: "<img>",
    correct: "d",
  },
  {
    question: "Which HTML tag produces the biggest heading?",
    a: "<h7>",
    b: "<h6>",
    c: "<h4>",
    d: "<h9>",
    correct: "b",
  },
];

const questionEl = document.querySelector("#question");
const quiz = document.querySelector("#quiz");
const a_text = document.querySelector("#a_text");
const b_text = document.querySelector("#b_text");
const c_text = document.querySelector("#c_text");
const d_text = document.querySelector("#d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.textContent = currentQuizData.question;
  a_text.textContent = currentQuizData.a;
  b_text.textContent = currentQuizData.b;
  c_text.textContent = currentQuizData.c;
  d_text.textContent = currentQuizData.d;
}

loadQuiz();

function ansSelected() {
  const answerEls = document.querySelectorAll(".answer");

  let answer = undefined;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselectAnswers() {
  const answerEls = document.querySelectorAll(".answer");

  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", function () {
  const answer = ansSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions 🎉</h2>
      <button onclick="location.reload()">Replay.</button>`;
    }
  }
});
