var Preferencias=require("../models/preferencias");
    express=require("express");
    router=express.Router();

router.post('/crearPreferencias',(req,response)=>{
    var body=req.body;
    console.log(body);
      Preferencias.insertMany({
        hobbie:body.hobbie,
        generoPreferido:body.generoPreferido,
        edadminima:body.edadminima,
        edadmaxima:body.edadmaxima,
        ciudades: body.ciudades,
        busco:body.busco
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