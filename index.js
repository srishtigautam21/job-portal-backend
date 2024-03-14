const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: ["https://job-portal-frontend-sepia.vercel.app"],
    methods: ["GET"],
    credentials: true,
  })
);
const { jobs } = require("./db");
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/jobs", async (req, res) => {
  const allJobs = await jobs.find({});
  res.json({
    jobs: allJobs,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
