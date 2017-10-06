const storage = [
    { id: 1, email: 'admin@example.com', password: '1234', role: 'admin' },
    { id: 2, email: 'user@example.com', password: '1234', role: 'user' }
]

module.exports = {
    findByEmail: (email) => new Promise((resolve,reject) => {
        const result = storage.find(x => x.email === email)
        if(!result) {
            reject('user not found')
            return
        }
        resolve(result)
    })
}