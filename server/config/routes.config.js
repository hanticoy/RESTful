

module.exports = function (app) {

    const express = require('express');

    //instrucciones para devolver JSON de nuestra api
    app.use(express.urlencoded({extended: true}));
    app.use(express.json());

    const datasController = require('../controller/datas.contrroller')
    
    app.get('/queryAll', function (req, res) {
        datasController.queryAll(req,res);
    });

    app.get('/queryById/:id', function (req, res) {
        datasController.queryById(req,res);
    });

    app.post('/new', function (req, res) {
        datasController.new(req,res);
    });

    app.put('/update', function (req, res) {
        datasController.update(req,res);
    });

    app.delete('/delete', function (req, res) {
        datasController.delete(req,res);
    });
}


