var mongoose = require('mongoose')
    , Schema = mongoose.Schema
    , ObjectId = Schema.ObjectId;


var userDetailsSchema = new Schema({
    name: String,
    email: String,
    role: String,
    status: String
});

var UserDetails = mongoose.model('UserDetails', userDetailsSchema);

const save = async (userInput) => {
    try {
        var user = new UserDetails({
            "name": userInput.name,
            "email": userInput.email,
            "role": userInput.role,
            "status": userInput.status
        });

      let savedUser = await user.save();    
    return await savedUser
    } catch (e) {
        throw new Error(e.message)
    }
}

const find = async () => {
    try {
      let users = await UserDetails.find()  
    return await users
    } catch (e) {
        throw new Error(e.message)
    }
}

const updateOne = async (userInput) => {
    try {
      var user = await UserDetails.findOne()
      .where("_id").in([userInput._id])
      .exec();
      user.name = userInput.name;
      user.email = userInput.email;
      user.status = userInput.status;
      user.role = userInput.role;
     let updatedUser = await user.save();
    return await updatedUser
    } catch (e) {
        throw new Error(e.message)
    }
}

module.exports = {
    save,
    find,
    updateOne
}