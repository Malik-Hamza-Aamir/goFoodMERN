const express = require('express');
const cors = require("cors");
const MongoDB = require("./db");
const app = express();
const port = 4000;

app.use(cors());
app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.use(express.json());
app.use("/api" , require("./Routes/CreateUser"));
app.use("/api" , require("./Routes/DisplayData"));
app.use("/api" , require("./Routes/OrderData"))
app.use("/api" , require("./Routes/MyOrderData"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});