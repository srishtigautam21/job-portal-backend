const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
const { jobs } = require("./db");

const PORT = process.env.PORT || 5000;

app.get("/jobs", async (req, res) => {
  const allJobs = await jobs.find({});
  console.log(allJobs);
  res.json({
    jobs: allJobs,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
