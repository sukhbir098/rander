const express = require("express");
const mongoose = require("mongoose"); // Fixed the typo
const app = express();

const PORT = process.env.PORT || 3000; 

const DB_URI = 'mongodb+srv://sukhbirmundlia:sachin123@cluster0.3b0qq.mongodb.net/testing';
app.use(express.json());

mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB!'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

app.get("/", (req, res) => {
    res.send("Hello Render..");
});

app.post("/data", (req, res) => {
    const requestData = req.body; // Fixed variable name
    console.log('Received Data:', requestData);
    res.json({ message: 'Data received successfully', data: requestData });
});

app.listen(PORT, () => {
    console.log(`Server Running at ${PORT}`);
});
