function outer() {
    let counter = 0

return function(){
    counter++;
    console.log(counter)}
}

const counter = outer()

counter()
