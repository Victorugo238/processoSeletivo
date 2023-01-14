const express = require("express");
const app = express();
const port = 3000;
const router = require("./src/routers/router");

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use("/", router)

app.listen(port, () => {
    console.log("rodando na porta 3000")
})