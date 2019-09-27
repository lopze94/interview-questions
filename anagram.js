const anagram = (wordA, wordB) => {
    const objA = charObj(wordA)
    const objB = charObj(wordB)

    return Object.keys(objA).length == Object.keys(objB).length ? checkChars(objA, objB) : false
}

const charObj = (str) => {
    str = str.toLowerCase().trim()
    let obj = {}
    for(let char of str.split('')){
        obj[char] = obj[char] + 1 || 1
    }

    return obj
}

const checkChars = (objA, objB) => {
    for(char in Object.keys(objA)){
        if (objA[char] != objB[char]) return false
    }

    return true
}

console.log(anagram("friEnD", "rienfd"))