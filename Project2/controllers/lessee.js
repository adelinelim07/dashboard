const express = require("express");
const router = express.Router();
const Lessee = require("../models/lessee.js");

router.get("/", (req, res) => {
  Lessee.find({}, (err, foundLessee) => {
    res.render("lessee/index.ejs", {
      lessee: foundLessee
    });
  });
});

router.get("/new", (req, res) => {
  res.render("lessee/new.ejs");
});

//...
//...farther down the page
router.post("/", (req, res) => {
  Lessee.create(req.body, (err, createdLessee) => {
    res.redirect("/lessee");
  });
});

router.delete("/:id", (req, res) => {
  Lessee.findByIdAndRemove(req.params.id, () => {
    res.redirect("/lessee");
  });
});

router.get("/:id/edit", (req, res) => {
  Lessee.findById(req.params.id, (err, foundLessee) => {
    res.render("lessee/edit.ejs", {
      Lessee: foundLessee
    });
  });
});

router.put("/:id", (req, res) => {
  Lessee.findByIdAndUpdate(req.params.id, req.body, () => {
    res.redirect("/lessee");
  });
});

//avoid this handling /new by placing it towards the bottom of the file
router.get("/:id", (req, res) => {
  Lessee.findById(req.params.id, (err, foundLessee) => {
    res.render("lessee/show.ejs", {
      lessee: foundLessee
    });
  });
});

module.exports = router;