function task1(callback) {
    console.log("task1 completed");
    callback();
}

function task2(callback) {
    console.log("task2 completed");
    callback();
}

function task3() {
    console.log("task3 completed");
}

task1(() => {
    task2(() => {
        task3();
    });
});