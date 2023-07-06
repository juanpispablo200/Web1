var Encuentros=require("../models/encuentros");
    express=require("express");
    router=express.Router();
router.post('/crearEncuentros',(req,response)=>{
        var body=req.body;
        console.log(body);
        Encuentros.insertMany({
        personaA:body.personaA,
        personaB:body.personaB,
        lugar:body.lugar,
        latitud:body.latitud,
        longitud:body.longitud
    }).then(function () {
        console.log("Successfully saved defult items to DB");
        response.status(200).json("Datos Guardados");
      })
      .catch(function (err) {
        console.log(err);
        response.status(500).json("Ocurrio un error al guardar")
      });;

});
module.exports=router;