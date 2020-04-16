const mongoose = require("mongoose");

const CourseSchema = mongoose.Schema({
  course:{
    type:String,
    required:true
   },
  tag: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Courses", CourseSchema);
