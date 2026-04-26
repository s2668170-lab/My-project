const flashcards = [
    { front: "❓ What is JavaScript?", back: "✅ A programming language that makes websites interactive" },
    { front: "❓ What is a variable?", back: "✅ A container to store data — e.g., let x = 5" },
    { front: "❓ What is a function?", back: "✅ A block of code that performs a specific task — e.g., function name() {}" },
    { front: "❓ What is an event?", back: "✅ A user action — e.g., click, hover, keypress" },
    { front: "❓ What is console.log()?", back: "✅ Prints a message in the browser console (for debugging)" },
     { front: "❓ What is an array?", back: "✅ A container that stores multiple values — e.g., [1,2,3]" },
    { front: "❓ What is a loop?", back: "✅ Runs code multiple times — e.g., for, while" },
    { front: "❓ What is if-else?", back: "✅ Checks a condition — if true, do one thing; else, do another" }
];

let currentIndex = 0;
let isFlipped = false;
const flashcard = document.getElementById('flashcard');
const frontDiv = document.querySelector('.card-front');
const backDiv = document.querySelector('.card-back');
const counterDiv = document.getElementById('counter');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function updateCard() {
    if (isFlipped) {
        flashcard.classList.remove('flipped');
        isFlipped = false;
    }
    frontDiv.innerHTML = flashcards[currentIndex].front;
    backDiv.innerHTML = flashcards[currentIndex].back;
    counterDiv.innerHTML = `Card ${currentIndex + 1} of ${flashcards.length}`;
}

flashcard.addEventListener('click', () => {
    flashcard.classList.toggle('flipped');
    isFlipped = !isFlipped;
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < flashcards.length - 1) {
        currentIndex++;
        updateCard();
    } else {
        alert("🎉 This is the last card!");
    }
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
         updateCard();
    } else {
        alert("📌 This is the first card!");
    }
});

updateCard();

       