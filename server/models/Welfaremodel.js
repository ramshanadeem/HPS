const mongoose = require('mongoose');
const WelfareSchema = mongoose.Schema({
    MRNo: {
        type: Number,
        required: [true, 'Mr is missing']
    },
    TokenNo: {
        type: Number,
        required: [true, 'TokenNo is missing']
    },
    WelfareDate: {
        type: Date,
        default: new Date()
    },

    ISPAF: {
        type: String,
        required: [true, 'ISPAF is missing']
    },
    ISSTAFF: {
        type: String,
        required: [true, 'ISSTAFF is missing']
    },
    
    Profession: {
        type: String,
        required: [true, 'Profession is missing']

    },
    Education: {
        type: String,
        required: [true, 'Education is missing']

    },
    ReqName: {
        type: String,
        required: [true, 'ReqName is missing']

    },
    
})

const WelfareModel = mongoose.model('WelfareModel', WelfareSchema)
module.exports = WelfareModel
