const express = require('express')
const cors=require('cors')

const app= express()
//Configuración de cors para recibir peticiones desde otros origenes
app.use(cors())
app.use(express.json())

let info={
    cartas:[{
        mazo:"Corazones",
        descripcion:"K",
        valor:"10"
    },{
        mazo:"Corazones",
        descripcion:"7",
        valor:"7"    
    }],
    id: 1
}

app.get('/cartas',(req,res)=>{
    res.json(info)
})

app.post('/carta',(req,res)=>{
    console.log(req.body)
    res.json({
        mensaje:"Post realizado con éxito"
    })
})

app.listen(8080,()=>console.log("En línea"))
