const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Interested = mongoose.model("Interested");


router.post("/", async (req, res) => {
  const { rating, category } = req.body;
  if (rating > 3) {
    Interested.find({}, function (err, result) {
      if (err) {
        return res.send(err);
      } else {
        console.log("result", result);
        var temp = result[0].interested;
        var interested = [...temp];
        if (interested.includes(category) === false) interested.push(category);
        Interested.updateOne(
          {},
          { $set: { interested: interested } },
          function (err, doc) {
            if (err) {
              console.log("Something wrong when updating data!");
            }
            console.log(doc);
          }
        );
        console.log(interested);
        return res.send(result);
      }
    });
  }
});
router.get("/interested", async (req, res) => {
  Interested.find({}, function (err, result) {
    if (err) {
      return res.send(err);
    } else {
      console.log("result", result);
      return res.send(result[0].interested);
    }
  });
});

module.exports = router;
