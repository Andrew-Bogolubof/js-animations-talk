const node = document.querySelector('#node');

let currentX = 0;
const endX = 300;

function animatePos(endx, duration) {
    const elX = node.offsetLeft;
    const frames = duration / 1000 * 60;
    const dx = (endx - elX) / frames;

    const frame = () => {
        currentX += dx;

        node.style.transform = `translateX(${currentX}px)`;

        if (currentX < endX) {
            requestAnimationFrame(frame);
        }
    }

    frame();
}




animatePos(300, 3000);