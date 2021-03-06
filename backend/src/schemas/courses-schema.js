const mongoose = require('mongoose')

const coursesSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  teacher: {
    type: String,
    required: true
  },
  students:{
    type: Array,
    required: true
  },
  test:{
    type: Object
  },
  history:{
    type: Array
  }
})

module.exports = mongoose.model('courses', coursesSchema)