const flashcards = [
    { front: "❓ What is HTML?", back: "✅ Hypertext Markup Language — It creates the structure of web pages" },
    { front: `❓ What does the &lt;p&gt; tag do?`, back: "✅ Creates a paragraph for writing text" },
    { front: "❓ What is an attribute?", back: "✅ Extra information about an element — e.g., src, href, alt" },
    { front: "❓ What does the &lt;img&gt; tag do?", back: "✅ Displays an image on a website" },
    { front: "❓ What is the &lt;a&gt; tag?", back: "✅ Creates a link to go from one page to another" },
    { front: "❓ Difference between &lt;div&gt; and &lt;span&gt; ?", back: "✅ &lt;div&gt; is block level, &lt;span&gt; is inline" },
    { front: "❓ What is the root element of HTML?", back: "✅ &lt;html&gt; — the very first tag" },
    { front: "❓ What does the alt attribute do?", back: "✅ Shows text if the image fails to load" }
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