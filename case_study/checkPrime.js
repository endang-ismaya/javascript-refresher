function checkPrime(number) {
    let flag = 0;

    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            flag++;
        }
    }

    if (flag == 2) {
        return true;
    }

    return false;
}

console.log(checkPrime(5));
console.log(checkPrime(15));
console.log(checkPrime(10));
