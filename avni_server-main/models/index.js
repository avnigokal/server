var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var interestedSchema = new Schema({
  interested: { type: Array, default: [1] },
});
mongoose.model("Interested", interestedSchema);
