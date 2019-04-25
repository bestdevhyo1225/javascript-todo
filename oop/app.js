const Controller = require('./controller');
const ErrorHandler = require('./errorHandler')
const readLine = require('readline');
const rl = readLine.createInterface({
    input:process.stdin,
});

// (() => {
//     rl.on('line', (input) => {
//         const errorHandler = new ErrorHandler();
//         const controller = new Controller();
//         controller.instruct(input);
//     });
// })();

function test(input) {
    console.log(input);
    const errorHandler = new ErrorHandler();
    const controller = new Controller();
    controller.instruct(input);
}

// test('show$all')
// test('show$todo')
// test('show$done')
// test('add$testTodo$[“testTag”, “testTag2"]')
// test('update$378$done')
// test('update$378$todo')
test('delete$378')