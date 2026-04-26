const flashcards = [
    { front: "❓ What is CPU?", back: "✅ Central Processing Unit — the brain of the computer, does all calculations" },
    { front: "❓ What is RAM?", back: "✅ Temporary memory — used to run apps, data is deleted when power is off" },
    { front: "❓ What is ROM?", back: "✅ Permanent memory — stores basic instructions" },
    { front: "❓ What is an Operating System?", back: "✅ Software that manages hardware and apps — Windows, Mac, Linux" },
    { front: "❓ What is a Browser?", back: "✅ Software to use the internet — Chrome, Edge, Firefox" },
    { front: "❓ What is Wi-Fi?", back: "✅ Wireless internet connection" },
    { front: "❓ What is a Server?", back: "✅ A computer that stores websites and data — serves the client" },
    { front: "❓ What is Cloud Storage?", back: "✅ Saving data on the internet — Google Drive, iCloud" }
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