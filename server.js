const express = require('express');
const app = express();

// Middleware to serve static files (for CSS/JS files)
app.use(express.static('public'));

// Middleware to parse JSON requests
app.use(express.json()); 

// Function to handle all calculations
const calculate = (req, res, operation) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Please provide valid numbers.' });
    }

    let result;
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                return res.status(400).json({ error: 'Cannot divide by zero.' });
            }
            result = num1 / num2;
            break;
        default:
            return res.status(400).json({ error: 'Invalid operation.' });
    }

    res.json({ result });
};

// API Routes for calculations
app.get('/add', (req, res) => calculate(req, res, 'add'));
app.get('/subtract', (req, res) => calculate(req, res, 'subtract'));
app.get('/multiply', (req, res) => calculate(req, res, 'multiply'));
app.get('/divide', (req, res) => calculate(req, res, 'divide'));

// Serve the main HTML page at the root endpoint
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Calculator microservice running on port ${PORT}`);
});
