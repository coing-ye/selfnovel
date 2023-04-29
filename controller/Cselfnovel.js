const Selfnovel = require('../models/Selfnovel');

exports.indexpage = (req,res) => {
    res.render('index');
};

exports.getsignin = (req,res) =>{
    res.render('signin');
};

exports.getsignup = (req,res) =>{
    res.render('signin');
}