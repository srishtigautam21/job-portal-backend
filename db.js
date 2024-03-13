const mongoose = require("mongoose");
require("dotenv").config();
console.log("here", process.env.mongo_username);

mongoose.connect(
  `mongodb+srv://${process.env.mongo_username}:${process.env.mongo_password}cluster0.gelbqey.mongodb.net/JobPortalDb`
);

const JobSchema = mongoose.Schema({
  jobTitle: String,
  companyName: String,
  location: String,
  datePosted: String,
  salary: String,
  skills: String,
  experience: String,
  education: String,
});

const jobs = mongoose.model("jobs", JobSchema);

module.exports = {
  jobs,
};
