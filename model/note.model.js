
const mongoose = require('mongoose')

const noteSchema = mongoose.Schema({
  title:String,
  desc:String,
  userID:{ type:mongoose.Schema.Types.ObjectId,
    ref:'user'
  }
},
{ timestamps: true }
)
 const noteModel = mongoose.model('note',noteSchema)
 module.exports = noteModel