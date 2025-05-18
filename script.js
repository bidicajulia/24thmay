const questions = [
  {
    text: "Which team does Max Verstappen drive for?",
    answers: ["Ferrari", "Mercedes", "Red Bull", "McLaren"],
    correct: 2
  },
  {
    text: "How many wheels does an F1 car have?",
    answers: ["2", "4", "6", "8"],
    correct: 1
  },
  {
    text: "What does DRS stand for?",
    answers: ["Drive Racing Speed", "Drag Reduction System", "Downforce Rear Setup", "Dynamic Racing Style"],
    correct: 1
  }
];

let current = 0;

function showQuestion() {
  const question = questions[current];
  document.getElementById("question-text").innerText = question.text;
  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";
  question.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.innerText = answer;
    btn.onclick = () => checkAnswer(index);
    answersDiv.appendChild(btn);
  });
}

function checkAnswer(index) {
  if (index === questions[current].correct) {
    current++;
    if (current < questions.length) {
      showQuestion();
    } else {
      document.querySelector(".quiz-container").classList.add("hidden");
      document.getElementById("result-box").classList.remove("hidden");
    }
  } else {
    alert("Oops! Wrong answer. Try again!");
  }
}

showQuestion();
