const findUserById = (userId) => users.find(userId)
const findAllUsers = () => users.findAll()

module.exports = {
    findUserById,
    findAllUsers
}