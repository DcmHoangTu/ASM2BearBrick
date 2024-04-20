var express = require('express');
var router = express.Router();
const BearbrickModel = require('../models/BearbrickModel');
const ColorModel = require('../models/ColorModel');

router.get('/', async(req,res) =>{
    var bearbricks = await BearbrickModel.find();
    res.render('bearbrick/index', {bearbricks:bearbricks})
})

router.get('/detail/:id', async (req, res) => {
    var id = req.params.id;
    // SELECT * FROM student WHERE id = 'id'
    var bearbrick = await BearbrickModel.findById(id);
    res.render('bearbrick/detail', { bearbrick:bearbrick });
 })
 
 router.get('/delete/:id', async (req, res) => {
    var id = req.params.id;
    await BearbrickModel.findByIdAndDelete(id);
    console.log('Delete product succeed');
    res.redirect('/bearbrick');
 })
 
 router.get('/add', async (req, res) => {
   var color = await ColorModel.find();
    res.render('bearbrick/add', {color : color});
 })
 
 router.post('/add', async (req, res) => {
    var bearbrick = req.body;
    await BearbrickModel.create(bearbrick);
    console.log('Add Product !');
    res.redirect('/bearbrick');
 })

  
 router.get('/color',  (req, res) => {

   res.render('bearbrick/add');
})

router.post('/color', async (req, res) => {
   var bearbrick = req.body;
   await BearbrickModel.create(bearbrick);
   console.log('Add Product !');
   res.redirect('/bearbrick/add');
})
 
 router.get('/edit/:id', async (req, res) => {
    var id = req.params.id;
    var bearbrick = await BearbrickModel.findById(id);
    res.render('bearbrick/edit', { bearbrick: bearbrick })
 })
 
 router.post('/edit/:id', async (req, res) => {
    var id = req.params.id;
    var bearbrick = req.body;
    await BearbrickModel.findByIdAndUpdate(id, bearbrick);
    console.log('Update product succeed !');
    res.redirect('/bearbrick');
 })
 router.post('/search', async(req,res)=>{
    var keyword = req.body.name;
    var bearbricks = await BearbrickModel.find({Name: new RegExp(keyword,"i")});
    res.render('bearbrick/index', {bearbricks:bearbricks})
 })



module.exports = router;
