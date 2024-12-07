const express = require("express");
const User = require("./models/User");

const app = express();
app.use(express.json());

// Sync database
const sequelize = require("./db");
sequelize.sync();

// Create a new user
app.post("/users", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all users
app.get("/users", async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

// Get a user by ID
app.get("/users/:id", async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json(user);
});

// Update a user
app.put("/users/:id", async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user) return res.status(404).json({ error: "User not found" });
  await user.update(req.body);
  res.json(user);
});

// Delete a user
app.delete("/users/:id", async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user) return res.status(404).json({ error: "User not found" });
  await user.destroy();
  res.status(204).send();
});

// Start the server
app.listen(3000, () => console.log("Server running on http://localhost:3000"));
