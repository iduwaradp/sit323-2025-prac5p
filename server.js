const express = require('express');
const app = express();

// Parse JSON requests
app.use(express.json()); 

// Function to handle calculations
const calculate = (req, res, operation) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = req.query.num2 !== undefined ? parseFloat(req.query.num2) : null; // Handle single-input operations

    if (isNaN(num1) || (num2 !== null && isNaN(num2))) {
        return res.status(400).json({ error: 'can you Please provide valid numbers.' }); // Error handling
    }

    let result;
    switch (operation) {
        case 'add': result = num1 + num2; break;
        case 'subtract': result = num1 - num2; break;
        case 'multiply': result = num1 * num2; break;
        case 'divide':
            if (num2 === 0) {
                return res.status(400).json({ error: 'I Cannot divide by zero.' });
            }
            result = num1 / num2;
            break;
        case 'power': result = Math.pow(num1, num2); break; // Exponentiation
        case 'sqrt':
            if (num1 < 0) {
                return res.status(400).json({ error: 'I Cannot calculate square root of a negative number.' });
            }
            result = Math.sqrt(num1); 
            break;
        case 'modulo':
            if (num2 === 0) {
                return res.status(400).json({ error: 'I Cannot find modulo with zero.' });
            }
            result = num1 % num2; 
            break;
    }

    res.json({ result });
};

// API routes
app.get('/add', (req, res) => calculate(req, res, 'add'));
app.get('/subtract', (req, res) => calculate(req, res, 'subtract'));
app.get('/multiply', (req, res) => calculate(req, res, 'multiply'));
app.get('/divide', (req, res) => calculate(req, res, 'divide'));
app.get('/power', (req, res) => calculate(req, res, 'power'));
app.get('/sqrt', (req, res) => calculate(req, res, 'sqrt')); // Only needs num1
app.get('/modulo', (req, res) => calculate(req, res, 'modulo'));

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`Calculator microservice running on port ${PORT}`));