var numPrimeArrangements = function (n) {
    let primeCount = 0
    debugger
    for (let i = 2; i <= n; i++) {
        if (isPrimeNum(i)) {
            primeCount++
        }
    }
    let otherCount = n - primeCount
    let ans = 1
    while (primeCount > 0) {
        ans = ans * primeCount
        primeCount--
    }
    let otherAns = 1
    while (otherCount > 0) {
        otherAns = otherAns * otherCount
        otherCount--
    }
    return ans * otherAns
};

function isPrimeNum(num) {
    /*  
      如果一个数可以被拆分为两个数的乘积形式 
      如 16 = 4 * 4 则不是质数
      所以两个数必须有一个小于sqrt(num)
    */
    let sqrt = Math.sqrt(num)
    for (let i = 2; i <= sqrt; i++) {
        if (num % i === 0) return false
    }
    return true
}
numPrimeArrangements(5)