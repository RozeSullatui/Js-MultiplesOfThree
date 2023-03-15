
const genkiFunction = function(number) {
    for (let n = 1; n <= number; n++) {
        const strN = n.toString();
        if (n % 3 === 0 || strN.includes('3')) {
        console.log(`${n}!!!!!!!`)
        } else {
        console.log(n)
        }
    }
}

const OneGenkiFunction = function(number) {
    let n = 1;
    const intervalId = setInterval(() => {
        const strN = n.toString();
        if (n % 3 === 0 || strN.includes('3')) {
        console.log(`${n}!!!!!!!`)
        } else {
        console.log(n)
        }
        n++;
        if (n > number) {
            clearInterval(intervalId);
        }
    }, 1000);
}

const FizzBuzzFunction = function(number) {
    for (let n = 1; n <= number; n++) {
        if (n % 3 === 0 && n % 5 === 0) {
            console.log('FizzBuzz')
        } else if (n % 3 === 0) {
            console.log('Fizz')
        } else if (n % 5 === 0) {
            console.log('Buzz')
        } else {
            console.log(n)
        }
    }
}