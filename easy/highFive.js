/**
 * @param {number[][]} items
 * @return {number[][]}
 */
var highFive = function(items) {
    let students = {}
    
    for(const student of items){
        const id = student[0]
        const score = parseInt(student[1])
        if(!students[id]) students[id] = []
        students[id].push(score)
    }
    
    let result = []
    for(const id of Object.keys(students)){
        students[id] = students[id].sort((a,b) => b - a).splice(0,5)
        
        average = Math.floor(students[id]
            .reduce((total, current) => total+current) / students[id].length)
         
        result.push([id, average])
    }

    return result
};