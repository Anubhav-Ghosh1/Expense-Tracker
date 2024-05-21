require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const dbConnect = require("./db/dbConnect");
const routes = require("./routes/transactions");
const {readdirSync} = require("fs")

// port number
const PORT = process.env.PORT;

// middleware
app.use(express.json());
app.use(cors({
    origin: "*",
    // origin: ['http://localhost:3000', 'http://192.168.1.7:3000'],
    credentials: true,
}));
app.get("/", (req, res) => {
  res.json({
    user: "Anubhav",
  });
});

// mounting routes
app.use("/api/v1",routes)

const server = () => {
  dbConnect();
  app.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`);
  });
};

server();