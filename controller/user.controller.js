const { createUser, findUsers, updateUser } = require('../service/user.service')
 
const post = async (req, res, next) => {  
  try {
    let createdUser = await createUser(req.body)
    res.status(201).json(createdUser)
    next()
  } catch(e) {
    console.log(e.message)
    res.sendStatus(500) && next(error)
  }
}

const get = async (req, res, next) => {  
  try {
    let users = await findUsers()
    res.status(200).json(users)
    next()
  } catch(e) {
    console.log(e.message)
    res.sendStatus(500) && next(error)
  }
}

const put = async (req, res, next) => {  
  try {
    let user = await updateUser(req.body)
    res.status(200).json(user)
    next()
  } catch(e) {
    console.log(e.message)
    res.sendStatus(500) && next(error)
  }
}
 
module.exports = {
    post, 
    get,
    put
}