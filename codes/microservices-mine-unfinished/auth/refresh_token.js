const storage = []

module.exports = {
    create: ({userId, refreshToken, scope}) => new Promise((resolve, reject) => {
        storage.push({userId, refreshToken, scope, createdAt: Date.now(), lastAccess: Date.now() })
        resolve()
    }),
    find: (refreshToken) => new Promise((resolve, reject) => {
        const result = storage.find((x) => x.refreshToken === refreshToken)
        if(!result) {
            reject('refresh token not found')
            return
        }
        result.lastAccess = Date.now()
        resolve(result)
    }),
    remove: (refreshToken) => new Promise((resolve, reject) => {
        storage = storage.filter(x => x.refreshToken !== refreshToken)
        resolve() 
        // ไม่ต้อง reject เพราะถ้าหาไม่เจอเลยก็บรรลุวัตถุประสงค์คือไม่มี token อยู่ดี
    })
}