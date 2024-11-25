"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API (1)
------------------------------------------------------- */

const {Schema,model} = require("mongoose")

const DepartmentSchema = new Schema({
    name: {
        type:String,
        required:true,
        unique:true,
        trim:true
    }
},{
    timestamps:true,
    collection: "Departments"
})

module.exports = model("Departments", DepartmentSchema)

/************************************/