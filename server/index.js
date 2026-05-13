const resumeRoutes = require("./routes/resumeRoutes");

const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);
app.use(express.json());
app.use("/api/resume", resumeRoutes);

app.get("/", (req, res) => {
  res.send("SkillScope AI Backend Running");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
