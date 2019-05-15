const node = document.querySelector('#node');

let currentX = 0;
const endX = 300;

function animatePos(endx, duration) {
    const elX = node.offsetLeft;
    const frames = duration / 1000 * 60;
    const dx = (endx - elX) / frames;

    const id = setInterval(() => {
        currentX += dx;

        node.style.transform = `translateX(${currentX}px)`;

        if (currentX > endX) {
            clearInterval(id);
        }
    }, 16);
}

animatePos(300, 3000);