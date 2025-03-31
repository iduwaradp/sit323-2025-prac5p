// Function to perform calculation and update the result
function calculate(operation) {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;

    if (num1 === "" || num2 === "") {
        alert("Please enter both numbers");
        return;
    }

    fetch(`http://localhost:3000/${operation}?num1=${num1}&num2=${num2}`)
        .then(response => response.json())
        .then(data => {
            if (data.result !== undefined) {
                document.getElementById('result-value').innerText = data.result;
            } else {
                alert("Error: " + data.error);
            }
        })
        .catch(error => {
            alert("An error occurred: " + error);
        });
}
