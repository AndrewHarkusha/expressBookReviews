const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const axios = require("axios");
const public_users = express.Router();

public_users.use(express.json());


public_users.post("/register", (req,res) => {
  //Write your code here
  let username = req.body.username;
  let password = req.body.password;
  console.log(req.body)
  if(username && password){
    if(isValid(username)){
      users.push({username:username,password:password});
      return res.status(200).json({message: "User registered successfully"});
    }
    else{
      return res.status(400).json({message: "Username already exists"});
    }
  }else{
    return res.status(400).json({message: "Username or password not provided"});
  }

// Get the book list available in the shop
public_users.get('/', async function (req, res) {
  //Write your code here
  console.log('hello m here');
  axios.get('http://localhost:5000/books').then(
    (responseBooks)=>{
      return res.status(200).send(JSON.stringify(responseBooks.data,null , 4));
    }
  ).catch(e=>
    res.status(404).send("cant get books <br>  "+ e)
    )
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
 });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

module.exports.general = public_users;
