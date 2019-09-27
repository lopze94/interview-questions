const palindrome = (str) => {
    str = str.toLowerCase().trim()
    return str === str.split('').reverse().join('')
}

console.log(palindrome('anna'))