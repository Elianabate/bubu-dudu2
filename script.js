const letters = {
  1: {
    title: "Para Bubu 💌",
    text: "Acá vas a escribir tu primera carta. Contale cómo empezó todo y qué sentiste al conocerla."
  },
  2: {
    title: "Cosas que me encantan de vos 🌷",
    text: "Acá podés escribir pequeños detalles que te gustan de ella: su forma de hablar, sus gestos, momentos que te hacen sonreír, etc."
  },
  3: {
    title: "Un recuerdo ✨",
    text: "Elegí un recuerdo especial de ustedes y contalo con tus propias palabras."
  }
};

const questions = [
  {
    q: "¿Cuál de estos elegiría Dudu para pasar una tarde?",
    a: ["Jugar videojuegos 🎮", "Dormir todo el día 😴", "Escalar una montaña 🏔️"],
    correct: 0
  },
  {
    q: "¿Qué apodo tiene Valentina?",
    a: ["Bubu 💗", "Lulu 🌸", "Bibi 🦋"],
    correct: 0
  },
  {
    q: "¿Quién está haciendo esta página?",
    a: ["Dudu ❤️", "Un robot 🤖", "El cartero 📮"],
    correct: 0
  }
];

let currentQuestion = 0;
let score = 0;

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  if (id === "game") renderQuestion();
}

function openLetter(number) {
  const l = letters[number];
  document.getElementById("letterContent").innerHTML =
    `<h2>${l.title}</h2><p style="line-height:1.8">${l.text}</p>`;
  document.getElementById("letterModal").classList.add("show");
}

function closeLetter(event) {
  if (!event || event.target.id === "letterModal" || event.target.classList.contains("close")) {
    document.getElementById("letterModal").classList.remove("show");
  }
}

function renderQuestion() {
  const item = questions[currentQuestion];
  document.getElementById("question").textContent = item.q;
  const answers = document.getElementById("answers");
  answers.innerHTML = "";

  item.a.forEach((answer, i) => {
    const btn = document.createElement("button");
    btn.className = "answer";
    btn.textContent = answer;
    btn.onclick = () => answerQuestion(i);
    answers.appendChild(btn);
  });
}

function answerQuestion(i) {
  const item = questions[currentQuestion];
  if (i === item.correct) score++;

  currentQuestion++;

  if (currentQuestion < questions.length) {
    document.getElementById("result").textContent = "Bien 😌";
    setTimeout(renderQuestion, 500);
  } else {
    document.getElementById("result").textContent =
      `Terminaste 💗 ${score}/${questions.length} correctas`;
    setTimeout(() => showScreen("final"), 1200);
  }
}

function yesAnswer() {
  showScreen("yes");
  createHearts();
}

function createHearts() {
  for (let i = 0; i < 18; i++) {
    const heart = document.createElement("div");
    heart.textContent = "♥";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "105vh";
    heart.style.color = "#e8a9bd";
    heart.style.fontSize = (14 + Math.random() * 22) + "px";
    heart.style.transition = "transform 3s ease, opacity 3s ease";
    document.body.appendChild(heart);

    requestAnimationFrame(() => {
      heart.style.transform = `translateY(-${110 + Math.random()*70}vh) rotate(${Math.random()*80-40}deg)`;
      heart.style.opacity = "0";
    });

    setTimeout(() => heart.remove(), 3200);
  }
}
