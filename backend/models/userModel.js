const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true},
    isAdmin: { type: Boolean, required: true, default: false}
});

//User is the name of the collection that will be saved to mongodb
const userModel = mongoose.model("User", userSchema);

module.exports = userModel;