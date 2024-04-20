var express = require('express');
var router = express.Router();
const ProductModel = require('../models/ProductModel');
const BearbrickModel = require('../models/BearbrickModel');
const GokuModel = require('../models/GokuModel');
const ColorModel = require('../models/ColorModel');

router.get('/', async (req, res) => {
   var bearbricks = await BearbrickModel.find();
   var gokus = await GokuModel.find();
   var colors = await ColorModel.find();
   console.log(bearbricks);
   res.render('product/index', { 
      bearbricks: bearbricks,
      gokus: gokus,
      colors: colors
    });
})
router.get('/detail/:id', async (req, res) => {
    var id = req.params.id;
    // SELECT * FROM student WHERE id = 'id'
    var product = await ProductModel.findById(id);
    res.render('product/detail', { product:product });
 })
 
 router.get('/delete/:id', async (req, res) => {
    var id = req.params.id;
    await BearbrickModel.findByIdAndDelete(id);
    await GokuModel.findByIdAndDelete(id);
    await ColorModel.findByIdAndDelete(id);
    console.log('Delete product succeed');
    res.redirect('/product');
 })
 
 router.get('/add', (req, res) => {
    res.render('product/add');
 })
 
 router.post('/add', async (req, res) => {
    var product = req.body;
    await ProductModel.create(product);
    console.log('Add Product !');
    res.redirect('/product');
 })
 
 router.get('/edit/:id', async (req, res) => {
    var id = req.params.id;
    var product = await ProductModel.findById(id);
    res.render('product/edit', { product: product })
 })
 
 router.post('/edit/:id', async (req, res) => {
    var id = req.params.id;
    var product = req.body;
    await ProductModel.findByIdAndUpdate(id, product);
    console.log('Update product succeed !');
    res.redirect('/product');
 })
 router.post('/search', async(req,res)=>{
    var keyword = req.body.name;
    var bearbricks = await BearbrickModel.find({Name: new RegExp(keyword,"i")});
    res.render('product/index', {bearbricks:bearbricks})
 })



module.exports = router;
