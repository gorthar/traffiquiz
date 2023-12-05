import { questions } from "./sampleData.js";

let currentQuestionIndex = 0;
const questionText = document.getElementById("questionText");
console.log(questionText.innerHTML);
const answerButtons = document.querySelectorAll(".answer-btn");
console.log(questions[23]);
const results = {
  correct: 0,
  incorrect: 0,
};
for (let i = 0; i < answerButtons.length; i++) {
  answerButtons[i].addEventListener("click", () => {
    console.log("clicked");
    console.log(
      "Correct Answer:",
      questions[currentQuestionIndex].correctAnswer
    );
    questions[currentQuestionIndex].userAnswer = answerButtons[i].innerHTML;
    console.log("Selected Answer:", answerButtons[i].innerHTML);
    if (
      answerButtons[i].innerHTML ===
      questions[currentQuestionIndex].correctAnswer
    ) {
      console.log("correct");
      results.correct++;
    } else {
      console.log("incorrect");
      results.incorrect++;
    }
    currentQuestionIndex++;

    renderQuestion();
  });
}

renderQuestion();

function renderQuestion() {
  if (currentQuestionIndex >= questions.length) {
    renderResults();
    return;
  }
  questionText.innerHTML = questions[currentQuestionIndex].question;
  for (let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].innerHTML = questions[currentQuestionIndex].options[i];
  }
}

function renderResults() {
  document.getElementById("questionHeader").innerHTML = "Results";
  questionText.innerHTML = `Correct: ${results.correct} Incorrect: ${results.incorrect}`;
  for (let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].style.display = "none";
  }
  renderAnswers();
}

function renderAnswers() {
  const answers = document.getElementById("answers");
  for (let i = 0; i < questions.length; i++) {
    const question = document.createElement("div");
    question.classList.add("question");
    const questionNumber = document.createElement("h1");
    questionNumber.classList.add("question-number");
    questionNumber.innerHTML = `Question ${i + 1}`;
    const questionText = document.createElement("h2");
    questionText.classList.add("question-text");
    questionText.innerHTML = questions[i].question;
    const correctAnswer = document.createElement("p");
    correctAnswer.classList.add("correct-answer");
    correctAnswer.innerHTML = `Correct Answer: ${questions[i].correctAnswer}`;
    const userAnswer = document.createElement("p");
    if (
      questions[i].userAnswer === questions[i].correctAnswer &&
      questions[i].userAnswer !== ""
    ) {
      userAnswer.style.color = "green";
    } else if (
      questions[i].userAnswer !== questions[i].correctAnswer &&
      questions[i].userAnswer !== ""
    ) {
      userAnswer.style.color = "red";
    }
    userAnswer.classList.add("user-answer");
    userAnswer.innerHTML = `Your Answer: ${questions[i].userAnswer}`;
    question.appendChild(questionNumber);
    question.appendChild(questionText);
    question.appendChild(correctAnswer);
    question.appendChild(userAnswer);
    answers.appendChild(question);
  }
}
