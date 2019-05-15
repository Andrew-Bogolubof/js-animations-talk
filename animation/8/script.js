const node = document.querySelector('#node');

let currentX = 0;
const endX = 300;

function animatePos(endx, duration) {
    const elX = node.offsetLeft;
    const frames = duration / 1000 * 60;
    const dx = (endx - elX) / frames;

    const frame = () => {
        //const currentOffsetLeft = node.offsetLeft;

        node.style.marginLeft = `${node.offsetLeft + 10}px`

        node.style.marginTop = `${node.offsetLeft + 10}px`

        node.style.transform = `translateX(${currentX}px)`;

        if (node.offsetLeft < endX) {
            var id = requestAnimationFrame(frame);
        } else {
            cancelAnimationFrame(id);
        }


    }

    frame();
}




animatePos(300, 3000);