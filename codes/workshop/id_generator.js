function createIdGenerator(name) {
    let id = 0
    return () => `${name}_${++id}`
}

let bookIdGenerator = createIdGenerator('book')
let userIdGenerator = createIdGenerator('user')

console.log(bookIdGenerator())
console.log(userIdGenerator())
console.log(bookIdGenerator())
console.log(bookIdGenerator())
console.log(userIdGenerator())
console.log(bookIdGenerator())
console.log(bookIdGenerator())
console.log(userIdGenerator())
console.log(userIdGenerator())
console.log(userIdGenerator())
console.log(bookIdGenerator())
console.log(userIdGenerator())
console.log(bookIdGenerator())
console.log(userIdGenerator())