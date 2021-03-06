const express = require("express");
const port = process.env.PORT || 8000;

//const bodyParser = require("body-parser");
const app = express();
const path = require("path");
app.use(express.static(path.join(__dirname, "/src")))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'/src/index.html'))
})

app.listen(port, () => {
    console.log("Server app listening on port " + port);
});
