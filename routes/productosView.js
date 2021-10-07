const express = require("express");
const { Router } = express;

const router = Router();
const productos = require("../database/productos");

router.get("/", (req, res) => {
    res.render("productos", { data: productos });
});

module.exports = router;