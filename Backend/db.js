const mongoose = require("mongoose");
const DBurl = "mongodb+srv://goFood:Hamza16Feb@cluster0.gpuzb6v.mongodb.net/gofoodmern?retryWrites=true&w=majority";

const MongoDB = async () => {

    try{
        const dbConnection = await mongoose.connect(DBurl);
        console.log("DB Connected Successfully");
 
        const fetchedData = dbConnection.connection.db.collection("food_items");        
        const data = await fetchedData.find({}).toArray(); // find returns all the data
        const foodCategory = dbConnection.connection.db.collection("foodCategory");
        const categorydata = await foodCategory.find({}).toArray();
        global.food_items = data;
        global.foodCategory = categorydata;
        // console.log(global.food_items);

    }

    catch(err){
        console.log("Error");
    }
        
};

module.exports = MongoDB();