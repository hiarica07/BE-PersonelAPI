"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API (1)
------------------------------------------------------- */

const Department = require("../models/department")


module.exports = {

    list: async (req,res) => {

        const result = await res.getModelList(Department)

        res.status(200).send({
            error:false,
            detail: await res.getModelListDetails(Department),
            result
        })
    },
    create: async (req,res) => {

        const result = await Department.create(req.body)

        res.status(201).send({
            error:false,
            result
        })
    },
    read: async (req,res) => {

        const result = await Department.findById(req.params.id)
        // console.log(result);

        res.status(200).send({
            error:false,
            result
        })
    },
    update: async (req,res) => {

        const result = await Department.findByIdAndUpdate(req.params.id, req.body, {new:true})

        //secondway// const result2 = await Department.updateOne({_id:req.params.id}, req.body, {runValidators:true})
       

        res.status(202).send({
            error:false,
            //secondway// new: await Department.findById(req.params.id) 
            result
        })
    },
    deleteDepartment: async (req,res) => {

        const result = await Department.deleteOne({_id:req.params.id})

        // console.log(result);

        res.status(result.deletedCount ? 204 : 404).send({
            error:!(result.deletedCount),
            result
        })
    },

    personnels: async (req,res) =>{
        const Personnel = require("../models/personnel")
        // const result = await Personnel.find({departmentId:req.params.id}).populate("departmentId")
        // awaiti unuttun
        const result = await res.getModelList(Personnel,{departmentId:req.params.id} ,"departmentId")
        res.status(202).send({
            error:false,
            result
        })
    }
}