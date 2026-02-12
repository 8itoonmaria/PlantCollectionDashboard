// server.js
const express = require("express");
const cors = require("cors"); //
const plantRoutes = require("./routes/plants"); // import the separate route file

// define our server app and the port it listens to
const app = express();
const PORT = 5000; //

// enable CORS so the React frontend (port 3000) can communicate
app.use(cors({ origin: "http://localhost:3000" }));

// enable JSON parsing
// this is important for 'reading' requests from clients
// req.body in POST requests)
app.use(express.json()); //

// routes
// any request that starts with /api/plants is sent to our router
app.use("/api/plants", plantRoutes); //see import at the top of this file

// a simple test route to check if server is up
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from the Node backend!" });
});

// start Server
app.listen(PORT, () => {
  console.log(`Backend Server is running on http://localhost:${PORT}`);
});
