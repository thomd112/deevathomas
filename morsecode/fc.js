
fetch('data.json')
.then(response => response.json())
.then(data => {
  console.log(data);
  processMorse(data);
})
.catch(error => console.log(error));





// Store the flashcard data in an array of objects
const flashcards = [    { question: "A", answer: ".-" },    { question: "B", answer: "-..." },    { question: "C", answer: "-.-." },    { question: "D", answer: "-.." }, { question: "E", answer: "." },{ question: "F", answer: "..-." },{ question: "G", answer: "--." },{ question: "H", answer: "...." },{ question: "I", answer: ".." },{ question: "J", answer: ".---" },{ question: "K", answer: "-.-" },{ question: "L", answer: ".-.." },{ question: "M", answer: "−−" },{ question: "N", answer: "-." },{ question: "O", answer: "---" },{ question: "P", answer: ".--." },{ question: "Q", answer: "--.-" },{ question: "R", answer: ".-." }   ,{ question: "S", answer: "..." }  ,{ question: "T", answer: "-" }  ,{ question: "U", answer: "..-" } ,{ question: "V", answer: "...-" }   ,{ question: "W", answer: ".--" } ,{ question: "X", answer: "-..-" },{ question: "Y", answer: "-.--" },{ question: "Z", answer: "--.." }      ];

// Get the HTML elements
const flashcardElement = document.getElementById("flashcard");
const shuffleButton = document.getElementById("shuffle");

// Add an event listener to the shuffle button
shuffleButton.addEventListener("click", shuffleFlashcard);

// Shuffle the flashcards and display the first card
shuffleFlashcard();

// Function to shuffle the flashcards and display a new card
function shuffleFlashcard() {
    // Shuffle the flashcards using the Fisher-Yates shuffle algorithm
    for (let i = flashcards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [flashcards[i], flashcards[j]] = [flashcards[j], flashcards[i]];
    }

    // Display the first flashcard
    const currentFlashcard = flashcards[0];
    flashcardElement.innerText = currentFlashcard.question;

    // Add a click event listener to the flashcard to display the answer
    flashcardElement.addEventListener("click", function showAnswer() {
        flashcardElement.innerText = currentFlashcard.answer;
        flashcardElement.removeEventListener("click", showAnswer);
    });
}
