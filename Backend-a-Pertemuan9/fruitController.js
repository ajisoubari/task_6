
const fruits = require('./fruits.js')

const index = () => {
    for(let i of fruits){
        console.log(i)
    }
}

const find = (index) => {
    let data = fruits[index]

    console.log(data)
}

const store = (data) => {
    fruits.push(data)
    index()
}

const update = (key, name) => {
    fruits[key] = name
    index()
}

const destroy = (key) => {
    fruits.splice(key, 1);
    index()
}

module.exports = {index, find, store, update, destroy}