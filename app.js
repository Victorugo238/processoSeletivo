const express = require("express");
const app = express();


app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))


app.listen(3000, () => {
    console.log("rodando na porta 3000")
})