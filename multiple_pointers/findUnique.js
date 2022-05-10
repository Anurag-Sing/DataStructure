function findUnique(arr) {
    let i = 0;
    for(let j = 1; j <= arr.length; j++) {
        if(arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j]
        }
    }
    return i;
}

// given the array find unique values 

findUnique([-8,-7, -6, -4,-4,-2, -1, -1, 0,1,2,3,4,4,4,4,5,5,6,6,7,7])