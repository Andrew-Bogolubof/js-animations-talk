for (var i = 1; i <= 2; i++) {
    (function (j) {
        setTimeout(() => { console.log('i =', j) }, 100);
    })(i)
}