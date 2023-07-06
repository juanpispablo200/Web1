const persona = require("../models/personas");
var Personas=require("../models/personas");
const { route } = require("../routers/router"),
    express=require("express"),
    router=express.Router();

router.post('/crearPersona',(req,response)=>{
    var body=req.body;
    console.log(body);
     Personas.insertMany({
         
        nombres:body.nombres,
        apellidos:body.apellidos,
        edad:body.edad,
        genero:body.genero,
        estadoCivil:body.estado,
        descripcion:body.descripcion,
        telefono:body.tel
    }).then(function () {
        console.log("Successfully saved defult items to DB");
        response.status(200).json("Datos Guardados");
      })
      .catch(function (err) {
        console.log(err);
        response.status(500).json("Ocurrio un error al guardar")
      });;

});
router.post('/editarPersonas',(req,response)=>{
  var body = req.body;
   
  persona.updateOne({
    _id:body.id

    //nombres:body.nombres // decir campo voy a actulizar
    
  },{
    $set:{
     
    nombres:body.nombres,
    apellidos:body.apellidos,
    edad:body.edad,
    genero:body.genero,
    estadoCivil:body.estado,
    descripcion:body.descripcion,
    telefono:body.tel
    }
}).then(function () {
  console.log("Successfully saved defult items to DB");
  response.status(200).json("Datos Guardados");
})
.catch(function (err) {
  console.log(err);
  response.status(500).json("Ocurrio un error al guardar")
});;

});

router.post("/eliminar",(req,response)=>{
  var body= req.body;
  Personas.deleteOne({
   // nombres:body.nombres
   _id:body.id
  }).then(function () {
    console.log("Successfully saved defult items to DB");
    response.status(200).json("Datos Guardados");
  })
  .catch(function (err) {
    console.log(err);
    response.status(500).json("Ocurrio un error al guardar")
  });;
  

  })


module.exports=router;
