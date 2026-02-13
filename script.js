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

        // hide buttons
        document.getElementById('options').style.display = 'none';

        // ✅ SHOW HEART SECTION
        document.getElementById('heart-section').style.display = 'block';
    };
}
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
            heart.style.left = (event.clientX - rect.left - 12) + "px";
            heart.style.top = (event.clientY - rect.top - 12) + "px";

            // 👇 PASTE THIS PART BELOW THE TOP LINE
            heart.style.fontSize = "24px";
            heart.style.animation = "floatUp 2s ease-out forwards";

            heartArea.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 2000);
        });
    }
});
