const express = require('express');
const res = require("express/lib/response");
const app = express();

// addiction
app.get('/add', (req, res) =>
{
    try
    {
        const num1 = 1;
        const num2 = 5;
        const result = num1 + num2;
        res.send("The result of add is: " + result); 

        if(isNaN(num1))
        {
             throw new Error("num1 incorrectly defined");
        }
        if (isNaN(num2))
        {
            throw new Error("num2 incorrectly defined");
        }
        if (num1 === NaN || num2 === NaN) {
            console.log()
            throw new Error("Parsing Error");
        }
    }
    catch(error)
    {
        console.error(error)
        res.status(500).json({statusclode:500, msg: error.toString() })
    }   
})

// subtraction
app.get('/sub', (req, res) =>
{
    try
    {
        const num1 = 6;
        const num2 = 3;
        const result = num1 - num2;
        res.send("The result of subtraction is: " + result); 

        if(isNaN(num1))
        {
             throw new Error("num1 incorrectly defined");
        }
        if (isNaN(num2))
        {
            throw new Error("num2 incorrectly defined");
        }
        if (num1 === NaN || num2 === NaN) {
            console.log()
            throw new Error("Parsing Error");
        }
    }
    catch(error)
    {
        console.error(error)
        res.status(500).json({statusclode:500, msg: error.toString() })
    }   
})

// multiplication
app.get('/mul', (req, res) =>
{
    try
    {
        const num1 = 2;
        const num2 = 3;
        const result = num1 * num2;
        res.send("The result of multiplication is: " + result); 

        if(isNaN(num1))
        {
             throw new Error("num1 incorrectly defined");
        }
        if (isNaN(num2))
        {
            throw new Error("num2 incorrectly defined");
        }
        if (num1 === NaN || num2 === NaN) {
            console.log()
            throw new Error("Parsing Error");
        }
    }
    catch(error)
    {
        console.error(error)
        res.status(500).json({statusclode:500, msg: error.toString() })
    }   
})

// division
app.get('/div', (req, res) =>
{
    try
    {
        const num1 = 3;
        const num2 = 3;
        const result = num1 / num2;
        res.send("The result of division is: " + result); 

        if(isNaN(num1))
        {
             throw new Error("num1 incorrectly defined");
        }
        if (isNaN(num2))
        {
            throw new Error("num2 incorrectly defined");
        }
        if (num1 === NaN || num2 === NaN) {
            console.log()
            throw new Error("Parsing Error");
        }
    }
    catch(error)
    {
        console.error(error)
        res.status(500).json({statusclode:500, msg: error.toString() })
    }   
})

app.listen(3040, () => console.log("server is running..."));

