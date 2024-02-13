
const random = (min, max) => {
    const rand = min + Math.random() * (max - min + 1);
    return Math.floor(rand);
}
const btn = document.querySelector('#btn');
btn.addEventListener('mouseenter', () => {
    btn.style.left = `${random(0, 90)}%`;
    btn.style.top = `${random(0, 80)}%`;
});

btn.addEventListener('click', () => {
    alert('Congrats! You hit the button! What are you doing with your life? :D');
});