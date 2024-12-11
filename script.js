let count = 0;
const counter = document.getElementById("counter");
counter.textContent = count;

document.addEventListener('click', () => {
    count++;
    counter.textContent = count;
});