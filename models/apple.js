const mongoose = require("mongoose")
const appleSchema = mongoose.Schema({

apple_type:{
    type: String,
    minLength: 3,
    maxLength: 100
},

quantity : {
    type:Number,
},

cost: {
    type:Number,
    min:1,
    max:500
}
})
module.exports = mongoose.model("apple",appleSchema)