// ================================
// BUBU ♡ DUDU - CONFIGURACIÓN
// ================================

const letters = {
  1: {
    title: "💌 Para Bubu",
    text: `Mi niña: 🐰🌷❤️

Quiero empezar diciéndote que estoy plenamente enamorado de vos desde el día 1 en el que nos conocimos. Desde ese momento, cada cosa con vos se volvió muy especial para mí. Me hacés demasiado feliz y posta que me encanta tenerte en mi vida. 💗🐇

Sé que ahora estamos pasando por un problema y que fue por culpa mía. Me arrepiento muchísimo de todas esas cosas feas que te dije sin pensar, en un mal momento. No era lo que quería decirte ni mucho menos hacerte sentir así. Perdón, de verdad. ❤️‍🩹

Te juro que quiero mejorar por vos, por nosotros y por todo lo que todavía nos queda por vivir. Quiero aprender de mis errores y demostrártelo con hechos, porque no quiero perder a la persona que amo por no saber manejar un mal momento. 🐰❤️

Mi niña abogada, mi futura novia y, si la vida quiere, mi futura esposa. 💗💍 Espero que podamos estar juntos por muchísimo más tiempo, conocernos en persona, abrazarnos muy fuerte y vivir todos esos momentos que tanto esperamos. 🐇🫶🏻

Esta carta es una pequeña forma de demostrarte todo el amor que te tengo, aunque siento que ni con mil cartas podría explicarte todo lo que siento por vos.

Te amo muchísimo, Bubu. ❤️🌷🐰
Y te voy a demostrar que puedo ser mejor por vos y por nosotros. 💗❤️`
  },

  2: {
    title: "🌷 Cosas que me encantan de vos 🐰❤️",
    text: `Mi Bubu: 🐰💗

Si tengo que elegir una sola cosa que me encanta de vos, sin pensarlo dos veces, es tu sonrisa. ❤️ De verdad, tu sonrisa es mi top 1 de cosas que me encantan de vos. Cada vez que sonreís me volvés loco y siento que podría quedarme mirándote durante horas. Es de esas cosas que con solo verla ya me hacen feliz. 🌷🐰

Después está todo lo demás. Me encanta tu pelo hermoso, tu cuerpito tan lindo y tus ojos. Uy, tus ojos. Son demasiado hermosos, ese color cafésito claro me encanta una banda. ❤️ Y tu carita para mí es simplemente perfecta, cada vez que te veo me volvés loco.

Me encanta tu voz natural, tan finita y linda, pero también esa voz agudita con tu acento salvadoreño cuando estás enojada JAJAJA. 🐰❤️ Me encantan tus actitudes de enojona, que te enojes fácil conmigo y hasta esas pequeñas cosas que capaz vos pensás que son malas.

Me encanta cuando sos tierna, cuando te ponés cariñosa y pegajosa conmigo, cuando no te querés despegar de mí. 💗 Pero sobre todo, Bubu, me encanta tu forma de ser. ❤️

Porque podés hacer la cosa más mínima del mundo y aun así hacerme sentir como el hombre más feliz del mundo por tenerte a mi lado. No es solo tu sonrisa, tus ojos, tu voz o tu pelo. Me encanta todo lo que te hace ser vos. 🐇💗

Te amo muchísimo, mi niña. ❤️🌷🐰`
  },

  3: {
    title: "✨ Un recuerdo hermoso de ti 🐰❤️",
    text: `Mi Bubu: 🐰💗

Quiero recordarte ese momento hermoso en el que volví después de un año de haber desaparecido. Habíamos pasado todo ese tiempo sin hablar pero cuando volvimos a estar juntos sentí que seguíamos teniendo la misma química de siempre. ❤️

Me acuerdo que cuando volví pensé “vos vas a ser mía no importa qué” JAJAJA. También recuerdo que al principio era re incómodo estar jugando con los chicos y estar nosotros ahí. Después empezamos a jugar juntos y de a poquito dejamos de estar tan incómodos.

No sé muy bien cómo pasó pero empezamos a tener una confianza hermosa. Jugábamos todo el tiempo. Hacíamos nuestras tonterías. Teníamos nuestros momentos bonitos y simplemente la pasábamos bien juntos. 🐰💗

Y llegó un momento en el que sentí que era el momento de enamorarte. Me encantó volver a tu vida Bubu. ❤️ De verdad quiero que sepas que te amo demasiado y que volver a encontrarte fue de las cosas más lindas que me pudieron pasar.

Siempre vas a ser un recuerdo hermoso para mí pero también sos mi presente. Y espero que algún día seas parte de todo mi futuro. 🐇❤️🌷

Te amo demasiado Bubu. ❤️🐰`
  }
};


// ================================
// PREGUNTAS
// ================================

const questions = [
  {
    type: "single",
    q: "¿Cuál es mi juego favorito? ✨",
    a: ["Counter-Strike 2", "Roblox", "Fortnite"],
    correct: 0
  },
  {
    type: "single",
    q: "¿Qué elegiría hacer durante el día? 🥺",
    a: ["Dormir todo el día", "Jugar a la compu", "Cocinar"],
    correct: 0
  },
  {
    type: "single",
    q: "¿Cuál es mi color favorito? 🌷",
    a: ["Azul", "Rojo", "Verde", "Rosa", "Negro"],
    correct: 0
  },
  {
    type: "single",
    q: "¿Cuál es mi comida favorita? 🫶",
    a: ["Pastas caseras de mi mamá", "Albóndigas de mi abuela", "Asado de mi tío"],
    correct: 0
  },
  {
    type: "single",
    q: "¿Quién es mi persona favorita? 🎀",
    a: ["Bubu 💗", "Bubu ❤️", "Bubu 🥺", "Bubu ✨", "Bubu 🌷", "Bubu 💕", "Bubu 🫶", "Bubu 💖"],
    // Todas las respuestas son correctas.
    correct: "all"
  },
  {
    type: "multi",
    q: "¿Cuáles son mis apodos? ⭐",
    a: ["Dudu", "Papi", "Elio"],
    // Tiene que tocar las 3 opciones para completar esta pregunta.
    required: [0, 1, 2]
  }
];


// ================================
// PROGRESO GUARDADO
// ================================

const STORAGE_KEY = "bubuDuduProgressV1";

const defaultProgress = {
  lettersOpened: [],
  currentQuestion: 0,
  score: 0,
  answeredQuestions: [],
  quizFinished: false,
  photosUnlocked: false
};

let progress = loadProgress();
let currentQuestion = progress.currentQuestion || 0;
let score = progress.score || 0;
let selectedMultiAnswers = new Set();

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return { ...defaultProgress, ...(saved || {}) };
  } catch {
    return { ...defaultProgress };
  }
}

function saveProgress() {
  progress.currentQuestion = currentQuestion;
  progress.score = score;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}


// ================================
// NAVEGACIÓN
// ================================

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });

  const target = document.getElementById(id);
  if (target) {
    target.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (id === "letters") updateLettersUI();
  if (id === "game") renderQuestion();
  if (id === "quizResult") updateQuizResult();
}

document.getElementById("startBtn").addEventListener("click", () => {
  showScreen("letters");
});

document.getElementById("toQuestionsBtn").addEventListener("click", () => {
  if (progress.lettersOpened.length < 3) {
    showToast("Todavía hay algo esperándote en las cartitas 💌");
    return;
  }

  showScreen("game");
});

document.getElementById("toPhotosBtn").addEventListener("click", () => {
  progress.photosUnlocked = true;
  saveProgress();
  showScreen("photos");
});

document.getElementById("toFinalBtn").addEventListener("click", () => {
  showScreen("final");
});

document.getElementById("yesBtn").addEventListener("click", yesAnswer);
document.getElementById("obvioBtn").addEventListener("click", yesAnswer);


// ================================
// CARTAS BLOQUEADAS
// ================================

const letterModal = document.getElementById("letterModal");
const letterContent = document.getElementById("letterContent");

document.querySelectorAll(".letter").forEach(button => {
  button.addEventListener("click", () => {
    const number = Number(button.dataset.letter);
    openLetter(number);
  });
});

function canOpenLetter(number) {
  if (number === 1) return true;
  return progress.lettersOpened.includes(number - 1);
}

function openLetter(number) {
  if (!canOpenLetter(number)) {
    showToast("Todavía hay una cartita esperando su momento 💌");
    return;
  }

  const letter = letters[number];

  if (!progress.lettersOpened.includes(number)) {
    progress.lettersOpened.push(number);
    progress.lettersOpened.sort((a, b) => a - b);
    saveProgress();
  }

  letterContent.innerHTML = `
    <h2 id="letterTitle">${escapeHTML(letter.title)}</h2>
    <p>${escapeHTML(letter.text)}</p>
  `;

  letterModal.classList.add("show");
  letterModal.setAttribute("aria-hidden", "false");

  updateLettersUI();
}

function closeLetter() {
  letterModal.classList.remove("show");
  letterModal.setAttribute("aria-hidden", "true");
  updateLettersUI();
}

document.getElementById("closeLetterBtn").addEventListener("click", closeLetter);
document.getElementById("readLetterBtn").addEventListener("click", closeLetter);

letterModal.addEventListener("click", event => {
  if (event.target === letterModal) closeLetter();
});

function updateLettersUI() {
  const opened = progress.lettersOpened.length;

  document.querySelectorAll(".letter").forEach(button => {
    const number = Number(button.dataset.letter);
    const status = button.querySelector(".lock-status");
    const small = button.querySelector("small");

    button.classList.toggle("locked", !canOpenLetter(number));
    button.classList.toggle("unlocked", canOpenLetter(number));

    if (progress.lettersOpened.includes(number)) {
      status.textContent = "✓";
      small.textContent = "Leída ♡";
    } else if (canOpenLetter(number)) {
      status.textContent = "♡";
      small.textContent = "Abrir carta";
    } else {
      status.textContent = "♡";
      small.textContent = "";
    }
  });

  document.querySelectorAll(".progress-dot").forEach(dot => {
    const number = Number(dot.dataset.dot);
    dot.classList.toggle("done", progress.lettersOpened.includes(number));
  });

  const hint = document.getElementById("lettersHint");
  const continueButton = document.getElementById("toQuestionsBtn");

  // El progreso queda marcado visualmente solo como "Leída" en cada carta.
  // No mostramos instrucciones que revelen que hay que completar todas.
  hint.textContent = "";
  hint.classList.add("hidden");

  if (opened >= 3) {
    continueButton.classList.remove("hidden");
  } else {
    continueButton.classList.add("hidden");
  }
}


// ================================
// PREGUNTAS BLOQUEADAS
// ================================

function renderQuestion() {
  if (currentQuestion >= questions.length) {
    showScreen("quizResult");
    return;
  }

  const item = questions[currentQuestion];

  document.getElementById("questionCounter").textContent =
    `Pregunta ${currentQuestion + 1} de ${questions.length}`;

  document.getElementById("question").textContent = item.q;

  const answers = document.getElementById("answers");
  const result = document.getElementById("result");

  answers.innerHTML = "";
  result.textContent = "";

  selectedMultiAnswers = new Set();

  item.a.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "answer";
    button.textContent = answer;

    if (item.type === "multi") {
      button.addEventListener("click", () => selectMultiAnswer(index, button));
    } else {
      button.addEventListener("click", () => answerQuestion(index));
    }

    answers.appendChild(button);
  });
}

function answerQuestion(index) {
  const item = questions[currentQuestion];
  const buttons = [...document.querySelectorAll(".answer")];

  buttons.forEach(button => button.disabled = true);

  const isCorrect =
    item.correct === "all" ||
    index === item.correct;

  if (isCorrect) {
    buttons[index].classList.add("correct");
    document.getElementById("result").textContent = "Correcta 💗";
    score++;
  } else {
    buttons[index].classList.add("incorrect");
    document.getElementById("result").textContent = "Incorrecta";
  }

  progress.answeredQuestions.push({
    question: currentQuestion,
    correct: isCorrect
  });

  currentQuestion++;
  saveProgress();

  setTimeout(() => {
    if (currentQuestion < questions.length) {
      renderQuestion();
    } else {
      progress.quizFinished = true;
      saveProgress();
      showScreen("quizResult");
    }
  }, 850);
}

function selectMultiAnswer(index, button) {
  if (selectedMultiAnswers.has(index)) return;

  selectedMultiAnswers.add(index);
  button.classList.add("selected", "correct");
  button.disabled = true;

  document.getElementById("result").textContent =
    `Encontraste ${selectedMultiAnswers.size} de 3 ✨`;

  if (selectedMultiAnswers.size === 3) {
    document.getElementById("result").textContent =
      "Correcta 💗 ¡Encontraste los tres!";

    score++;
    progress.answeredQuestions.push({
      question: currentQuestion,
      correct: true
    });

    currentQuestion++;
    saveProgress();

    setTimeout(() => {
      progress.quizFinished = true;
      saveProgress();
      showScreen("quizResult");
    }, 900);
  }
}


// ================================
// RESULTADO Y MINIJUEGO
// ================================

function updateQuizResult() {
  const total = questions.length;
  const percent = Math.round((score / total) * 100);

  const title = document.getElementById("quizTitle");
  const text = document.getElementById("quizText");
  const scoreText = document.getElementById("scoreText");
  const heartGame = document.getElementById("heartGame");

  if (score === total) {
    title.textContent = "¡Me conocés al 100%! 💗";
    text.textContent = "No fallaste ninguna. Parece que me conocés demasiado bien 🥺❤️";
    scoreText.textContent = `${score}/${total} correctas — ${percent}%`;

    heartGame.classList.add("hidden");
    return;
  }

  title.textContent = "¡Igual me conocés bastante! 💗";
  text.textContent =
    "Bueno, alguna se escapó... pero no pasa nada 😭 Ahora tenés un minijuego para recuperar esos corazones.";
  scoreText.textContent =
    `${score}/${total} correctas — ${percent}% antes del bonus`;

  heartGame.classList.remove("hidden");
  startHeartGame(total - score);
}

function startHeartGame(missing) {
  const board = document.getElementById("gameBoard");
  const gameScore = document.getElementById("gameScore");

  board.innerHTML = "";

  let caught = 0;
  gameScore.textContent = `0 / ${missing}`;

  for (let i = 0; i < missing; i++) {
    const heart = document.createElement("button");
    heart.className = "catch-heart";
    heart.textContent = "♥";

    const left = 8 + Math.random() * 76;
    const top = 8 + Math.random() * 72;

    heart.style.left = `${left}%`;
    heart.style.top = `${top}%`;

    heart.addEventListener("click", () => {
      heart.remove();
      caught++;
      gameScore.textContent = `${caught} / ${missing}`;

      if (caught === missing) {
        document.getElementById("quizTitle").textContent =
          "¡Recuperaste todos los corazones! 💗";
        document.getElementById("quizText").textContent =
          "¿Viste? Acá nadie se va sintiéndose mal. Ahora seguimos con la sorpresa 🥺❤️";
        document.getElementById("scoreText").textContent =
          "Bonus completado ✨";

        setTimeout(() => {
          document.getElementById("heartGame").classList.add("hidden");
        }, 700);
      }
    });

    board.appendChild(heart);
  }
}


// ================================
// FOTOS
// ================================

document.querySelectorAll(".photo-card img").forEach(image => {
  image.closest(".photo-card").addEventListener("click", () => {
    document.getElementById("modalImage").src = image.src;
    document.getElementById("modalImage").alt = image.alt || "Foto";
    document.getElementById("photoModal").classList.add("show");
  });
});

document.getElementById("closePhotoBtn").addEventListener("click", () => {
  document.getElementById("photoModal").classList.remove("show");
});

document.getElementById("photoModal").addEventListener("click", event => {
  if (event.target.id === "photoModal") {
    event.currentTarget.classList.remove("show");
  }
});


// ================================
// FINAL
// ================================

function yesAnswer() {
  showScreen("yes");
  createHearts();
}

function createHearts() {
  for (let i = 0; i < 22; i++) {
    const heart = document.createElement("div");
    heart.className = "floating-heart";
    heart.textContent = Math.random() > 0.35 ? "♥" : "♡";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (16 + Math.random() * 24) + "px";
    heart.style.animationDuration = (3.5 + Math.random() * 2.5) + "s";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 6500);
  }
}


// ================================
// CORAZONES DECORATIVOS
// ================================

function createBackgroundHeart() {
  const heart = document.createElement("span");
  heart.className = "floating-heart";
  heart.textContent = Math.random() > 0.5 ? "♡" : "♥";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (10 + Math.random() * 18) + "px";
  heart.style.animationDuration = (9 + Math.random() * 8) + "s";

  document.getElementById("floatingHearts").appendChild(heart);

  setTimeout(() => heart.remove(), 18000);
}

setInterval(createBackgroundHeart, 1700);


// ================================
// UTILIDADES
// ================================

function showToast(message) {
  let toast = document.querySelector(".toast");

  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(window.toastTimeout);
  window.toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}

function escapeHTML(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}


// ================================
// INICIO
// ================================

updateLettersUI();
