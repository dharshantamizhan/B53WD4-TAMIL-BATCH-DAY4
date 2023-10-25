let prime = [12, 11, 7, 5, 3, 9];
let checkprime = [];

let  isPrime = (n) => {
    for (let j = 2; j < n; j++) {
        if (n % j === 0) {
            return false;
        }
    }
    return true;
}

for (let num of prime) {
    if (isPrime(num)) {
        checkprime.push(num);
    }
}

console.log(checkprime,"checkPrime");
