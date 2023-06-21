



const express=require('express'),
     router=express.Router()
     personas=require('../controllers/personasController');
     encuentros=require('../controllers/encuentrosController');
     preferencias=require('../controllers/preferenciasController');
router.use("/personas",personas);
router.use("/encuentros",encuentros);
router.use("/preferencias",preferencias);



module.exports = router;