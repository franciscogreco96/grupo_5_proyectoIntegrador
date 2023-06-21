const fs = require("fs");
const path = require("path");

  let db= require("../../database/models");  
const { Module } = require("module");

const productApiController = {

    /* LIST USANDO APIS */
    list:(req,res) =>{
        db.Products.findAll()
        .then(function(products){
             return res.json({
                total: products.length,
                data: products,
                status: 200
             }
                
             ); 
        })
    },

    detail: (req,res) =>{
        db.Products.findByPk(req.params.id,{
            include: [{association:"productscolors"}, { association:"productsCategories"}]
        })
        .then(function(product){
            res.json({
                data:product
            });
        }) 
    }

}

module.exports = productApiController;