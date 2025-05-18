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

document.getElementById("startBtn").addEventListener("click", () => {
  document.getElementById("intro").classList.add("hidden");
  document.querySelector(".quiz-container").classList.remove("hidden");
  showQuestion();
});

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
      confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.6 }
      });
    }
  } else {
    alert("Oops! Wrong answer. Try again!");
  }
}

const emojis = ["❤️", "💖", "💘", "💝", "💗", "💕", "💞", "💓"];
const wrapper = document.getElementById("heart-wrapper");

function createHearts() {
 const emojis = ["❤️", "💖", "💘", "💝", "💗", "💕", "💞", "💓"];
const wrapper = document.getElementById("heart-wrapper");

function createHearts() {
  for (let i = 0; i < 50; i++) {
    const heart = document.createElement("div");
    heart.classList.add("floating-heart");
    heart.innerText = emojis[Math.floor(Math.random() * emojis.length)];

    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.bottom = `-${Math.random() * 20}vh`;
    heart.style.fontSize = `${1 + Math.random() * 2}rem`;
    heart.style.animationDuration = `${6 + Math.random() * 4}s`;
    heart.style.animationDelay = `${Math.random() * 5}s`;

    wrapper.appendChild(heart);
  }
}

createHearts();

}

createHearts();
