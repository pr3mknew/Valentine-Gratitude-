// ------------------------
// Handle button clicks
// ------------------------
function selectOption(option) {
    const yesButton = document.getElementById('yes-button');
    const noButton = document.getElementById('no-button');

    if (option === 'yes') {
        flashRainbowColors(() => {
            document.getElementById('question').style.display = 'none';
            displayCatHeart();
        });

    } else if (option === 'no') {
        noButton.innerText = 'You sure?';

        // Double Yes button size but cap at 80px
        let currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
        let newSize = Math.min(currentSize * 2, 80);
        yesButton.style.fontSize = newSize + 'px';
    } else {
        alert('Invalid option!');
    }
}

// ------------------------
// Flash rainbow colors
// ------------------------
function flashRainbowColors(callback) {
    const colors = ['#ff0000','#ff7f00','#ffff00','#00ff00','#0000ff','#4b0082','#9400d3'];
    let i = 0;

    // Smooth transition
    document.body.style.transition = 'background-color 0.2s linear';

    const interval = setInterval(() => {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200);

    setTimeout(() => {
        clearInterval(interval);
        document.body.style.backgroundColor = '';
        if (callback) callback();
    }, 2000);
}

// ------------------------
// Display initial cat
// ------------------------
function displayCat() {
    const container = document.getElementById('image-container');
    container.innerHTML = '';

    const cat = new Image();
    cat.src = 'cat.gif';
    cat.alt = 'Cat';

    cat.onload = () => container.appendChild(cat);
}

// ------------------------
// Display cat-heart with text
// ------------------------
function displayCatHeart() {
    const container = document.getElementById('image-container');
    container.innerHTML = '';

    const catHeart = new Image();
    catHeart.src = 'cat-heart.gif';
    catHeart.alt = 'Cat Heart';

    catHeart.onload = () => {
        container.appendChild(catHeart);

        const jokeText = document.createElement('p');
        jokeText.textContent = "I'm joking 😂 you know how weird my sense of humour is.";
        jokeText.style.marginTop = "10px";
        jokeText.style.fontSize = "18px";
        jokeText.style.textAlign = "center";

        container.appendChild(jokeText);

        document.getElementById('options').style.display = 'none';
    };
}

// ------------------------
// Heart drawing interaction
// ------------------------
document.addEventListener("DOMContentLoaded", () => {
    displayCat(); // show cat when page loads

    const heartArea = document.getElementById("heart-area");

    if (heartArea) {
        heartArea.addEventListener("click", (event) => {
            const heart = document.createElement("div");
            heart.className = "heart";
            heart.innerHTML = "❤️";

            const rect = heartArea.getBoundingClientRect();
            heart.style.position = "absolute";
            heart.style.left = (event.clientX - rect.left - 12) + "px"; // center heart
            heart.style.top = (event.clientY - rect.top - 12) + "px";


