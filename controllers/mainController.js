const fs = require('fs');
const path = require('path');


const db = require('../database/models');


const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");



const mainController = {
    home: (req, res) => {
        console.log(req.session.usuarioLogged)
        res.render('index', { session: req.session.usuarioLogged === undefined ? null : req.session.usuarioLogged });

    },

    // contact: (req, res) => {
    //     res.render('contact', { session: req.session.usuarioLogged === undefined ? null : req.session.usuarioLogged });
    // },
}


module.exports = mainController;