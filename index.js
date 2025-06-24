require("dotenv").config();
const express = require("express");
const port = process.env.PORT || 3000;



const app = express();

app.get("/", (req, res) => {
    res.json({
        message: "Hello"
    })
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  
