
const express = require("express");
const cors = require("cors");
const mongoose=require("mongoose")

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 8080;

//shema
const schemaData = mongoose.Schema({
    nom:String,
    x:Number,
    y:Number,
    remp:Number
},{
    timestamps:true,
    collection: 'poubelle'
})

const userModel=mongoose.model("poubelle",schemaData)

app.get("/data", async (req, res) => {
    try {
        const data = await userModel.find({});
        res.json({ success: true, data: data });
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ success: false, error: "Failed to fetch data" });
    }
});

mongoose.connect("mongodb+srv://makremmhiri:makrem2004@cluster0.cfinog1.mongodb.net/sample_mflix")
    .then(() => {
        console.log("Connected to DB");
        app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
    })
    .catch((err) => {
        console.error("Error connecting to the database:", err);
    });