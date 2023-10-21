const express = require('express');
const app = express();

const PORT = 3000;

app.listen(PORT, function(){
    console.log(`O express está funcionando na porta ${PORT}`);
});

app.get('/', function(req, res){
    res.send("Está funcionando 3");
})