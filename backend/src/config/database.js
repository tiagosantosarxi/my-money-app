const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/mymoney', { useNewUrlParser: true })

mongoose.Error.messages.general.required = "The attribute '{PATH}' is required."
mongoose.Error.messages.Number.min = "The '{VALUE}' is less then '{MIN}'."
mongoose.Error.messages.Number.max = "The '{VALUE}' is more then '{MAX}'."
mongoose.Error.messages.String.enum = "'{VALUE}' is not a valid value for '{PATH}'."
