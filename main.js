// Generate two random numbers between 1 and 10 (inclusive)
const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

// Get the question element from the DOM and set its innerHTML to display the generated numbers in a question
const questionElement = document.getElementById("question");
questionElement.innerHTML = `What is ${num1} + ${num2} = ?`;

// Calculate the correct answer
let correctAnswer = num1 + num2;

// Get the input element from the DOM
const inputElement = document.getElementById("input");

// Get the form element from the DOM
const formElement = document.getElementById("form");

// Get the score element from the DOM
const scoreElement = document.getElementById("score");

//  Initialize the score variable by retrieving it from local storage, or setting it to 0 if it is null
let score = JSON.parse(localStorage.getItem("score"));
if (score === null) {
  score = 0;
}

// Set the score element's innerHTML to display the score
scoreElement.innerHTML = `Score: ${score}`;

// Add an event listener to the form element that listens for the submit event
formElement.addEventListener("submit", (event) => {
  //Prevent the form from submitting and reloading the page
  event.preventDefault();

  // Get the user's answer from the input element
  const userAnswer = parseInt(inputElement.value);

  // check if the user's answer is correct and update the score accordingly
  if (userAnswer === correctAnswer) {
    score++;
    localStorageScore(score); // save the score to local storage using the localStorageScore function
    generateQuestion(); // generate a new question using the generateQuestion function
  } else {
    score--;
    alert(`Wrong! The correct answer is ${correctAnswer}`);
    localStorageScore(score); // save the score to local storage using the localStorageScore function
  }

  // Set the score element's innerHTML to display the score, and clear the input element's value
  scoreElement.innerHTML = `Score: ${score}`;
  inputElement.value = "";
});

// Function to update the score in local storage
function localStorageScore(newScore) {
  localStorage.setItem("score", JSON.stringify(score));
}

// Generate a new question with random numbers and operator using the generateQuestion function
function generateQuestion() {
  const num1 = Math.ceil(Math.random() * 10);
  const num2 = Math.ceil(Math.random() * 10);
  const operators = ["+", "-", "*", "/"]; //an array of operators
  const operator = operators[Math.floor(Math.random() * operators.length)]; //randomly select an operator from the array

  // Get the question element from the DOM and set its innerHTML to display the generated numbers in a question
  questionElement.innerHTML = `What is ${num1} ${operator} ${num2} = ?`;

  // Calculate the correct answer based on the operator
  switch (operator) {
    case "+":
      correctAnswer = num1 + num2;
      break;
    case "-":
      correctAnswer = num1 - num2;
      break;
    case "*":
      correctAnswer = num1 * num2;
      break;
    case "/":
      correctAnswer = num1 / num2;
      break;
  }
}
