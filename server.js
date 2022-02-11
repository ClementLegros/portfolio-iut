const express = require("express");
//const bodyParser = require("body-parser");
const app = express();
const path = require("path");
app.use(express.static(path.join(__dirname, "/src")))
app.use('/html', (req, res, next) => {
    res.sendFile(path.join(__dirname,'/src/index.html'))
})
app.listen(5005);