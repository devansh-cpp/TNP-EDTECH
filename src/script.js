document.addEventListener('DOMContentLoaded', () => {
    const counter = document.getElementById('counter');
    const target = 80000;
    const duration = 4000; // 4 seconds
    const increment = target / (duration / 16); // assuming 60fps
    let current = 0;

    function updateCounter() {
        current += increment;
        if (current < target) {
            counter.innerText = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            counter.innerText = target.toLocaleString();
        }
    }

    requestAnimationFrame(updateCounter);
});

document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('animatedText');
    const texts = ["Mock Test", "Mock Interviews", "Placement Support","Industry Experts"];
    let index = 0;

    function changeText() {
        textElement.classList.remove('animated-text');
        setTimeout(() => {
            textElement.innerText = texts[index];
            textElement.classList.add('animated-text');
            index = (index + 1) % texts.length;
        }, 1500); // Time for the text to disappear

        setTimeout(changeText, 5000); // Total time for one cycle of text change
    }

    setTimeout(changeText, 2500);
});