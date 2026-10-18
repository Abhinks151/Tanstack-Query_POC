import express from "express";
import mongoose, { Schema } from "mongoose";
import cors from "cors"
const UserSchema = new Schema({
  name: String,
});

const User = mongoose.model("User", UserSchema);

mongoose
  .connect("mongodb://127.0.0.1:27017/tanstack_query")
  .then(() => {
    console.log("Database connedted");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(express.json());
app.use(cors())

app.get("/", async (req, res) => {
  const users = await User.find();
  if (!users) throw new Error("users not found");

  return res.json({ data: users });
});

app.post("/", async (req, res) => {
  const { name } = req.body;
  const user = await User.create({ name });
  return res.json({ data: user });
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
