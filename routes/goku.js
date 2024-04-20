var express = require('express');
var router = express.Router();
const GokuModel =require('../models/GokuModel');

router.get('/', async(req,res) =>{
    var gokus = await GokuModel.find();
    res.render('goku/index', {gokus:gokus})
})

router.get('/detail/:id', async (req, res) => {
    var id = req.params.id;
    // SELECT * FROM student WHERE id = 'id'
    var goku = await GokuModel.findById(id);
    res.render('goku/detail', { goku:goku });
 })
 
 router.get('/delete/:id', async (req, res) => {
    var id = req.params.id;
    await GokuModel.findByIdAndDelete(id);
    console.log('Delete product succeed');
    res.redirect('/goku');
 })
 
 router.get('/add', (req, res) => {
    res.render('goku/add');
 })
 
 router.post('/add', async (req, res) => {
    var goku = req.body;
    await GokuModel.create(goku);
    console.log('Add Product !');
    res.redirect('/goku');
 })
 
 router.get('/edit/:id', async (req, res) => {
    var id = req.params.id;
    var goku = await GokuModel.findById(id);
    res.render('goku/edit', { goku: goku })
 })
 
 router.post('/edit/:id', async (req, res) => {
    var id = req.params.id;
    var goku = req.body;
    await GokuModel.findByIdAndUpdate(id, goku);
    console.log('Update product succeed !');
    res.redirect('/goku');
 })
 router.post('/search', async(req,res)=>{
    var keyword = req.body.name;
    var gokus = await GokuModel.find({Name: new RegExp(keyword,"i")});
    res.render('goku/index', {gokus:gokus})
 })



module.exports = router;
