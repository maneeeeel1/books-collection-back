const express = require("express");
const app = express();
const cors = require("cors");
const axios =require("axios")
const PORT = 3000;

app.use(cors());

app.get("/users", async (req, res) =>{
    const url = "https://api-books-ac3j.onrender.com/users";
    try{
        const response = await axios.get(url);
        const data = response.data
        res.json(data)
    }catch (ERROR){
        res.status(404).json({error: "users not found"})
    }

});

app.get("/books", async (req, res) =>{
    const url = "https://api-books-ac3j.onrender.com/books";
    try{
        const response = await axios.get(url);
        const data = response.data
        res.json(data)
    }catch (ERROR){
        res.status(404).json({error: "books not found"})
    }

});


app.listen(PORT, ()=>{
    console.log(`server listening port ${PORT}`)
});