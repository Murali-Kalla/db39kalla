const mongoose = require("mongoose")
const appleSchema = mongoose.Schema({

apple_type:{
    type: String,
    minLength: 3,
    maxLength: 10
},

quantity : {
    type:Number,
},

cost: {
    type:Number,
    min:1,
    max:250
}
})
module.exports = mongoose.model("apple",appleSchema)