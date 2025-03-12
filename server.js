const express = require('express');
const app = express();

//  parse JSON requests
app.use(express.json()); 

// Function to handle calculations
const calculate = (req, res, operation) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Please provide valid numbers.' });// error correction output
    }

    // opration selection
    let result;
    switch (operation) {
        case 'add': result = num1 + num2; break;
        case 'subtract': result = num1 - num2; break;
        case 'multiply': result = num1 * num2; break;
        case 'divide':
            if (num2 === 0) {
                return res.status(400).json({ error: 'Cannot divide by zero.' });// error correction output 
            }
            result = num1 / num2;
            break;
    }

    res.json({ result });
};

// API routes user need 
app.get('/add', (req, res) => calculate(req, res, 'add'));
app.get('/subtract', (req, res) => calculate(req, res, 'subtract'));
app.get('/multiply', (req, res) => calculate(req, res, 'multiply'));
app.get('/divide', (req, res) => calculate(req, res, 'divide'));

// Start server mode 
const PORT = 3000;
app.listen(PORT, () => console.log(`calculator microservice running on port ${PORT}`));
