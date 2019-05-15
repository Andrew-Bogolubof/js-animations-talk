
// Function.prototype.bind = function (context) {
//     const that = this;

//     console.log('!!!!!!!!!!!!!!!');

//     return function () {
//         return that.call(context);
//     }
// }

function doNothing() {
    console.log(this);
}

const first = {
    name: 'First'
};

const second = {
    name: 'Second'
};


const doFirst = doNothing.bind(first);
const doSecond = doFirst.bind(second);


doNothing(); // window

doFirst(); // { name: 'First' }

doSecond(); // { name: 'First' }


