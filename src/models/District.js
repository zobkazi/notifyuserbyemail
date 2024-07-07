const { Schema, model } = require("mongoose");


const districtSchema = new Schema({
    id: {
        type: String,
        required: true,
        trim: true,
    },
    division_id: {
        type: String,
        required: true,
        trim: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    bn_name: {
        type: String,
        required: true,
        trim: true,
    },
    lat : {
        type: String,
        required: true,
        trim: true,
    },
    long : {
        type: String,
        required: true,
        trim: true,
    },
}, {
    timestamps: true
});


const District = model("District", districtSchema);
module.exports = District;