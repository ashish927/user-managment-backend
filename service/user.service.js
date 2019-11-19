const { save, find, updateOne, deleteOne } = require('../database/user.db')
 
const createUser = async (user) => {
  try {
    return await save(user)
  } catch(e) {
    throw new Error(e.message)
  }
}

const findUsers = async () => {
  try {
    return await find()
  } catch(e) {
    throw new Error(e.message)
  }
}

const updateUser = async (user) => {
  try {
    return await updateOne(user)
  } catch(e) {
    throw new Error(e.message)
  }
}
 
const deleteUser = async (id) => {
  try {
    return await deleteOne(id)
  } catch(e) {
    throw new Error(e.message)
  }
}
module.exports = {
    createUser,
    findUsers,
    updateUser,
    deleteUser
}