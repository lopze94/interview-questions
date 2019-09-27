const fibonacci = (num) =>{
    return num < 2 ? num : fibonacci(num - 1) + fibonacci(num - 2)
}

const test = fibonacci(10);

console.log(test);