// Code your solution here!
function printString(string) {
    console.log(string[0])
    if (string.length > 1) {
        printString(string.slice(1))
    } else {
        return true
    }
}

function reverseString(string) {
    if (string.length > 1) {
        return string[string.length - 1] + reverseString(string.slice(0, string.length - 1))
    } else {
        return string
    }
}

function isPalindrome(string) {
    if (string[0] === string[string.length - 1]) {
        if (string.length > 1) {
            return isPalindrome(string.slice(1, string.length - 1))
        } else {
            return true
        }
    } else {
        return false
    }
}

function addUpTo(arr, n) {
    if (n) {
        return arr[n] + addUpTo(arr, n - 1)
    } else {
        return arr[n]
    }
}

function maxOf(arr) {
    if (arr.length > 1) {
        if (arr[0] > arr[1]) {
            return maxOf([arr[0], ...arr.slice(2, arr.length)])
        } else {
            return maxOf(arr.slice(1, arr.length))
        }
    } else {
        return arr[0]
    }
}

function includesNumber(arr, n) {
    if (arr.length) {
        debugger
        if (arr[0] === n) {
            return true
        } else {
            return includesNumber(arr.slice(1, arr.length), n)
        }
    } else {
        return false
    }
}