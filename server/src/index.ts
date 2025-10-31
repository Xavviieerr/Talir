import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 5000;

//middleware
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost"${PORT}`);
});
