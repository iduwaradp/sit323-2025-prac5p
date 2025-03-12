# SIT323/SIT737 - Cloud Native Application Development

## 4.1P: Building a Simple Calculator Microservice

### **Overview**
The goal of this task is to create and deploy a simple calculator microservice using **Node.js** and **Express**. The microservice performs basic arithmetic operations such as addition, subtraction, multiplication, and division. The service accepts REST API requests and handles errors such as invalid inputs and division by zero.

### **Tools and Technologies**
- **Node.js**: JavaScript runtime to run the server.
- **Express.js**: Framework used for building the API.
- **Git**: Version control for managing the code repository.

### **Installation Instructions**

1. **Clone the repository**:
   To clone the project, open your terminal and use the following command:
   ```bash
   git clone https://github.com/username/sit323-2025-prac4p.git

   API Endpoints
The following endpoints perform basic arithmetic operations:

Addition: /add?num1=<value>&num2=<value>
Subtraction: /subtract?num1=<value>&num2=<value>
Multiplication: /multiply?num1=<value>&num2=<value>
Division: /divide?num1=<value>&num2=<value>

Error Handling
Invalid input: If num1 or num2 is not a valid number, the response will be:
json
Copy
Edit
{
  "error": "Invalid input, numbers required"
}
Division by zero: If dividing by zero, the response will be:
json
Copy
Edit
{
  "error": "Cannot divide by zero"
}