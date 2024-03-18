const express = require("express");
const app = express();
const port = 3000;
const alumnsSurname = require("./data/alumns");
const validSurname = require("./middleware/validation")
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);

    app.get("/:surname", (req, res) => {
        res.send(alumnsSurname(req.params.surname));
    });


        

    })


