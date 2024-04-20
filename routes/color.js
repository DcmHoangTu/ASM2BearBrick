// router.get('/', async (req, res) => {
//   try {
//     const bearbricks = BearbrickModel.find();
//     const gokus = GokuModel.find();
//     const colors = ColorModel.find();
    
//     const [bearbricksData, gokusData, colorsData] = await Promise.all([bearbricks, gokus, colors]);

//     res.render('product/index', {
//       bearbricks: bearbricksData,
//       gokus: gokusData,
//       colors: colorsData
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Internal Server Error');
//   }
// });