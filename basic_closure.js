function outer(){
    let message="welcome to node.js";
    function inner(){
        console.log(message);
    }
    return inner;
}
const callback=outer();
callback();