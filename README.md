# SIT323/SIT737 - Cloud Native Application Development  
## 5.1P: Containerization of a Simple Web Application using Docker  

### Overview  
This project enhances the previously built **Calculator Microservice** by containerizing it using Docker. The application provides REST API endpoints for basic arithmetic operations (addition, subtraction, multiplication, and division) while ensuring proper error handling.  

### Tools and Technologies  
- **Node.js**: JavaScript runtime to run the server.  
- **Express.js**: Web framework used to build the API.  
- **Git**: Version control for managing the code repository.  
- **Docker**: Containerization tool to package the application.  
- **Docker Compose**: Tool to manage multi-container applications.  

---

## Installation and Setup  

### 1. Clone the Repository  
Open your terminal and run:  
```bash
git clone https://github.com/username/sit323-2025-prac5p.git
```

2. Navigate to the Project Directory
```bash
cd sit323-2025-prac5p
```
3. Install Dependencies
```bash
npm install
```
4. Run Locally (Without Docker)
```bash
node server.js
The server runs at http://localhost:3000.
```

**Docker Setup**
5. Create a Docker Image

Build a Docker image using:

```bash
docker build -t calculator-app .
6. Run the Docker Container
```bash
docker run -p 3000:3000 --name calculator-container calculator-app
```
The service will be available at http://localhost:3000.

7. Create a Docker Compose File
Create a docker-compose.yml file with:

```bash
services:
  calculator:
    build: .
    ports:
      - "3000:3000"
```
Start the application using:

```bash
docker-compose up -d
```
8. Push the Docker Image to Docker Hub
(a) Tag the Image:

```bash
docker tag calculator-app username/calculator-app:latest
```
(b) Push the Image:

```bash
docker push username/calculator-app:latest
```
Verify your image on Docker Hub.

API Endpoints
The following endpoints perform arithmetic operations:
```bash
Addition: /add?num1=<value>&num2=<value>

Subtraction: /subtract?num1=<value>&num2=<value>

Multiplication: /multiply?num1=<value>&num2=<value>

Division: /divide?num1=<value>&num2=<value>

```
##http://localhost:3000. if u derectly go trought it will show guI calculator...##
Error Handling

Invalid Input: Returns an error if num1 or num2 is missing or not a valid number.

Division by Zero: Returns an error when attempting to divide by zero.

Conclusion
This project successfully containerizes the Calculator Microservice using Docker and deploys it with Docker Compose. The image is pushed to Docker Hub, making it easily shareable and deployable across environments.

Author: Your Name Here
```bash
GitHub Repository: https://github.com/username/sit323-2025-prac5p
```

### Key Improvements:  
- Structured with clear **headings** and **subheadings**.  
- Added **code blocks** for commands and YAML.  
- Included **clickable links** (GitHub, Docker Hub, localhost).  
- Improved readability with **bold** and *italic* formatting.  
- Used lists (`-` and `*`) for better organization.  



# SIT323/SIT737 - Cloud Native Application Development  
## 5.1P: Containerization of a Simple Web Application using Docker  

### Overview  
This project enhances the previously built **Calculator Microservice** by containerizing it using Docker. The application provides REST API endpoints for basic arithmetic operations (addition, subtraction, multiplication, and division) while ensuring proper error handling.  

### Tools and Technologies  
- **Node.js**: JavaScript runtime to run the server.  
- **Express.js**: Web framework used to build the API.  
- **Git**: Version control for managing the code repository.  
- **Docker**: Containerization tool to package the application.  
- **Docker Compose**: Tool to manage multi-container applications.  

---


Author: Induwara MAlith
```bash
GitHub Repository: https://github.com/username/sit323-2025-prac5p
```
