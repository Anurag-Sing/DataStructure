// Given an array of no and the digit to provide max sum
// find the maximum summation of no based on the digit provided

function maxSum(arr, summationDigit) {
    if( arr.length === 0) {
        return null
    }
    let maxSum = 0;
    let tempsum = 0;

    for(let i = 0; i < summationDigit; i++) {
        console.log(arr[i])
        maxSum += arr[i];
    }
    tempsum = maxSum;
    for(let i = summationDigit; i < arr.length; i++) {
        tempsum = tempsum - arr[i-summationDigit] + arr[i];
        maxSum = Math.max(tempsum, maxSum)
    }
    console.log(maxSum)
    return maxSum
}

maxSum([1,2,3,4,5,6,7,8,9], 4)