// Time complexity => O(nlogn)
// Space Complexity => O(n)

const mergeSort = (arr) => {
    if (arr.length <= 1) return arr
    const middle = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0, middle)
    const rightArr = arr.slice(middle)

    return merge(mergeSort(leftArr), mergeSort(rightArr))
}

const merge = (leftArr, rightArr) => {
    const sortedArr = []

    while (leftArr.length && rightArr.length) {
        if (leftArr[0] > rightArr[0]) {
            sortedArr.push(rightArr.shift())
        } else {
            sortedArr.push(leftArr.shift())
        }
    }
    return [...sortedArr, ...leftArr, ...rightArr]
}

console.log(mergeSort([10, 6, -2, -8, 23]))
