# SIT323/SIT737 - Cloud Native Application Development

## 4.1P: Building a Simple Calculator Microservice

### **Overview**
This project implements a simple calculator microservice using **Node.js** and **Express**. The service provides basic arithmetic operations such as addition, subtraction, multiplication, and division via a REST API. It also includes error handling for invalid input and division by zero.

### **Tools and Technologies**
- **Node.js**: JavaScript runtime to run the server.
- **Express.js**: Web framework used to build the API.
- **Git**: Version control for managing the code repository.

### **Installation Instructions**

1. **Clone the repository**:
   - To clone the project, open your terminal and use the following command:
     ```bash
     git clone https://github.com/username/sit323-2025-prac4p.git
     ```

2. **Navigate to the project directory**:
   - Change into the project folder:
     ```bash
     cd sit323-2025-prac4p
     ```

3. **Install dependencies**:
   - Install **Express** (if not already installed):
     ```bash
     npm install express
     ```

4. **Start the server**:
   - Run the server:
     ```bash
     node server.js
     ```

   - The server will be running on `http://localhost:3000`.

### **API Endpoints**

The following endpoints perform basic arithmetic operations:

- **Addition**: `/add?num1=<value>&num2=<value>`
- **Subtraction**: `/subtract?num1=<value>&num2=<value>`
- **Multiplication**: `/multiply?num1=<value>&num2=<value>`
- **Division**: `/divide?num1=<value>&num2=<value>`

##**Error Handling**
- Invalid input: If num1 or num2 is not a valid number, the response will be:

- {
  "error": "Invalid input, numbers required"
}
-- Division by zero: If dividing by zero, the response will be:

- {
  "error": "Cannot divide by zero"
}
