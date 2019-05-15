const start = Date.now();
let c;

function formatDate(date) {
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}`;
}

console.log("start:   " + formatDate(new Date()));

setTimeout(() => {
    console.log("timeout: " + formatDate(new Date()));
}, 1000);

while (start + 2000 > Date.now()) {
    const c = 3 + 3 + 3;
}

console.log("end:     " + formatDate(new Date()));