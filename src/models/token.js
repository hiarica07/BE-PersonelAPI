"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API (1)
------------------------------------------------------- */

const {Schema,model} = require("mongoose")

const TokenSchema = new Schema({
    userId: {
        type:Schema.Types.ObjectId,
        ref:"Personnel",
        required:true,
        unique:true,
        trim:true,
        index:true
    },

    token:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        index: true
    }
},{
    timestamps:true,
    collection: "token"
})

module.exports = model("Token", TokenSchema)

/************************************/