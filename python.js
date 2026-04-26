const flashcards = [
    { front: "❓ What is Python?", back: "✅ A programming language — easy and powerful" },
    { front: "❓ What is print()?", back: "✅ Used to display output — e.g., print('Hello')" },
    { front: "❓ What is a variable in Python?", back: "✅ A container to store data — e.g., name = 'Ali'" },
    { front: "❓ What is an if statement?", back: "✅ Used to check a condition" },
    { front: "❓ What is a list in Python?", back: "✅ A container that stores multiple values — e.g., [1,2,3]" },
    { front: "❓ What is a loop in Python?", back: "✅ Repeats code multiple times — for and while" },
    { front: "❓ What is a function in Python?", back: "✅ A block of code that performs a specific task — def function_name():" },
    { front: "❓ What is a dictionary in Python?", back: "✅ Stores key-value pairs — e.g.{'name': 'Ali'}" }
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