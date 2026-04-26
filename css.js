const flashcards = [
    { front: "❓ What is CSS?", back: "✅ Cascading Style Sheets — used to style websites" },
    { front: "❓ What is a selector?", back: "✅ Selects an element to apply styles — e.g., .class, #id" },
    { front: "❓ What is the color property?", back: "✅ Sets the color of text" },
    { front: "❓ What is background-color?", back: "✅ Sets the background color of an element" },
    { front: "❓ What is margin?", back: "✅ Space outside an element" },
    { front: "❓ What is padding?", back: "✅ Space inside an element" },
    { front: "❓ What is display: flex?", back: "✅ Creates a flexible layout to align items" },
    { front: "❓ Difference between id and class?", back: "✅ id is unique (one element), class can be used on multiple elements" }
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