const express = require("express");
const app = express();

const productosApiRoute = require("./routes/productosApi");
const productosViewRoute = require("./routes/productosView");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set("views", __dirname+"/views");
app.set("view engine", "ejs");

app.use("/api/productos", productosApiRoute);
app.use("/productos", productosViewRoute);
app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
    res.render("formulario");
});

app.listen(8080, () => {
    console.log("Server running in: http://localhost:8080/")
});



