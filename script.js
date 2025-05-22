const questions = [
  {
    text: "Which team does Max Verstappen drive for?",
    answers: ["Ferrari", "Mercedes", "Red Bull", "McLaren"],
    correct: 2
  },
  {
    text: "Who holds the record for most consecutive podium finishes in F1?",
    answers: [" Michael Schumacher", "Sebastian Vettel", "Alain Prost", "Lewis Hamilton"],
    correct: 3
  },
  {
    text: "What does DRS stand for?",
    answers: ["Drive Racing Speed", "Drag Reduction System", "Downforce Rear Setup", "Dynamic Racing Style"],
    correct: 1
  }
  {
    text: "Who is Charles Leclerc's biggest rival?",
    answers: ["Ferarri's strategy team", "Verstappen", "Checo", "Street circuits"],
    correct: 0
  }
{
    text: "Is there a leakage?" – "A leakage of what?" – "I have the seat full of water... Must be the ____?",
    answers: ["tyres", "engine", "rain", "water"],
    correct: 3
  }
{
    text: "What happens if a driver breaks track limits during qualifying?",
    answers: ["Their lap time is deleted (invalid lap)", "The session is red-flagged", "They must start from the pit lane", "FIA checking"],
    correct: 0
  }
{
    text: "Do you know how much i love you?",
    answers: ["yessssss", "no.", "mmmaybe"],
    correct: 0
  }
];

let current = 0;

document.getElementById("startBtn").addEventListener("click", () => {
  document.getElementById("intro").classList.add("hidden");
  document.querySelector(".quiz-container").classList.remove("hidden");
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
        particleCount: 500,
        spread: 180,
        startVelocity: 70,
        scalar: 1.4,
        origin: { y: 0.6 }
      });
    }
  } else {
    alert("Oops! Wrong answer. Try again!");
  }
}

const emojis = ["❤️", "💖", "💘", "💝", "💗", "💕", "💞", "💓"];
const wrapper = document.getElementById("heart-wrapper");

// 🔇 Funcția a fost complet dezactivată:
function createHearts() {
  // Nimic aici – inimile nu mai apar.
}

// 🔇 Apelul este dezactivat:
//
// createHearts();
showQuestion();
