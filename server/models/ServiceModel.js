const mongoose = require('mongoose');
const ServiceSchema = mongoose.Schema({
   
    TokenNo: {
        type: Number,
        required: [true, 'Token is missing']
    },
    MRNo: {
        type: Number,
        required: [true, 'Token is missing']
    },
    
    ServiceDate: {
        type: Date,
        default: new Date()
    },

    Ward: {
        type: String,
        required: [true, 'name is missing']
    },
  
    Amount: {
        type: Number,
        required: [true, 'amount is missing']

    },
    TotalAmount: {
        type: Number,
        required: [true, 'amount is missing']

    },
    Gender: {
        type: String,
        // required: [true, 'Gender is missing']

    },
   
    PatientContribution: {
        type: String,
        required: [true, 'PatientCont is missing']

    },

    Remarks: {
        type: String,
        required: [true, 'remarks is missing']

    },

  
})

const ServiceModel = mongoose.model('ServiceModel', ServiceSchema)
module.exports = ServiceModel
