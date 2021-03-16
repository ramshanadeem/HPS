const mongoose = require('mongoose');
const ServiceSchema = mongoose.Schema({
    TokenNo: {
        type: Number,
        required: [true, 'Token is missing']
    },
    TokenNo: {
        type: Number,
        required: [true, 'Token is missing']
    },
    RegistrationDate: {
        type: Date,
        default: new Date()
    },

    Name: {
        type: String,
        required: [true, 'name is missing']
    },
    FatherOrHusband: {
        type: String,
        required: [true, 'FatherOrHusband is missing']
    },
    DOB: {
        type: Date,
        default: new Date(),
        required: [true, 'DOB is missing']
    },
    Age: {
        type: Number,
        required: [true, 'Age is missing']

    },
    Gender: {
        type: String,
        required: [true, 'Gender is missing']

    },
    Religion: {
        type: String,
        required: [true, 'Religion is missing']

    },
    District: {
        type: String,
        required: [true, 'District is missing']

    },

    City: {
        type: String,
        required: [true, 'City is missing']

    },

    Area: {
        type: String,
        required: [true, 'Area is missing']

    },
    HousNo: {
        type: String,
        required: [true, 'HousNo is missing']

    },
    Address: {
        type: String,
        required: [true, 'Address is missing']

    },
    CNIC: {
        type: Number,
        required: [true, 'CNIC is missing']

    },
    Phone: {
        type: Number,
        required: [true, 'Phone is missing']

    },
    OffPhone: {
        type: Number,
        required: [true, 'OffPhone is missing']

    },
    RefBy: {
        type: Number,
        required: [true, 'RefBy is missing']

    },
    Remarks: {
        type: String,
        required: [true, 'Remarks is missing']

    },
    IsZakat: {
        type: String,
        required: [true, 'IsZakat is missing']

    },
    IsPAFEmp: {
        type: String,
        required: [true, 'IsPAFEmp is missing']

    },
    MonthlyConsLimit: {
        type: Number,
        required: [true, 'MonthlyConsLimit is missing']

    },
    ThumbImage: {
        type: String,
        required: [true, 'ThumbImage is missing']

    },
    NOY: {
        type: String,
        required: [true, 'NOY is missing']

    },
    EmpID: {
        type: Number,
        required: [true, 'EmpID is missing']

    },
    IsStaff: {
        type: Number,
        required: [true, 'IsStaff is missing']

    },
    CreateUser: {
        type: String,
        required: [true, 'CreateUser is missing']

    },
    ModifyUser: {
        type: String,
        required: [true, 'ModifyUser is missing']

    },
    IsStaff: {
        type: Number,
        required: [true, 'IsStaff is missing']

    },
    CreateDate: {
        type: Date,
        default: new Date()
    },
    ModifyDate: {
        type: Date,
        default: new Date()
    }
})

const ServiceModel = mongoose.model('ServiceModel', ServiceSchema)
module.exports = ServiceModel
