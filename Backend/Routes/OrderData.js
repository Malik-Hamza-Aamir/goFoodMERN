const express = require("express");
const router = express.Router();
const Order = require("../models/Orders");

router.post("/orderData", async (req, res) => {
  let data = req.body.order_data; // create a new array with the updated data
  await data.splice(0 , 0, { Order_date: req.body.order_date }); // add the order date at the beginning

  //if email not existing in db then create: else: InsertMany()
  let eId = await Order.findOne({ 'email': req.body.email });
  console.log("Email Id = " + eId);
  if (eId === null) {
    console.log("First Time Ordering");
    try {
      await Order.create({
        email: req.body.email,
        order_data: [data]
      });
      res.json({ success: true });
    } catch (error) {
      console.log("Eid Error Block : " + error.message);
      res.status(500).send("Server Error");
    }
  } 
  
  else {
    console.log("Not First Time Ordering");
    try {
      await Order.findOneAndUpdate(
        { email: req.body.email },
        { $push: { order_data: data } }
      );
      res.json({ success: true });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Server Error");
    }
  }
});

module.exports = router;
