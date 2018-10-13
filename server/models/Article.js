var mongoose = require("mongoose");
// This allows new schema objects to be created
var Schema = mongoose.Schema;
// this creates the database
var articleSchema = new Schema({
  title: String,
  date: Date,
  url: String
});
// this allows interaction with the database
var Article = mongoose.model("Article", articleSchema);

module.exports = Article;