const questions = [
    "Pregunta 1: ¿Que es HTML?",
    "Pregunta 2: ¿Que es CSS?",
    "Pregunta 3: ¿Que es JavaScript?",
    "Pregunta 4: ¿Que es un backend?",
    "Pregunta 5: ¿Que es un frontend?"
  ];
  
  let countdownInterval;
  let timeLeft = 30;
  
  const countdownElement = document.getElementById("countdown");
  const startButton = document.getElementById("start-button");
  const submitButton = document.getElementById("submit-button");
  const questionForm = document.getElementById("question-form");
  
  startButton.addEventListener("click", startGame);
  questionForm.addEventListener("submit", submitAnswers);
  
  function startGame() {
    clearInterval(countdownInterval);
    timeLeft = 30;
    countdownElement.textContent = `Tiempo restante: ${timeLeft} segundos`;
    countdownInterval = setInterval(updateCountdown, 1000);
    submitButton.disabled = false;
    questionForm.reset();
  }
  
  function updateCountdown() {
    timeLeft--;
    countdownElement.textContent = `Tiempo restante: ${timeLeft} segundos`;
  
    if (timeLeft <= 0) {
      clearInterval(countdownInterval);
      countdownElement.textContent = "Tiempo terminado";
      submitButton.disabled = true;
      alert("Tiempo terminado. Por favor, envía tus respuestas.");
    }
  }
  
  function submitAnswers(event) {
    event.preventDefault();
    
    clearInterval(countdownInterval);
    countdownElement.textContent = "¡Respuestas enviadas!";
    submitButton.disabled = true;
  
    const answers = [];
    const answerInputs = document.querySelectorAll(".answer-input");
    
    answerInputs.forEach(input => {
      answers.push(input.value);
    });
  
    alert("Respuestas enviadas:\n\n" + answers.join("\n"));
  }
  