document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const staffId = document.getElementById('staffId').value;
    const password = document.getElementById('password').value;

    // Perform your login logic here, e.g., send the data to the server
    console.log('Staff ID:', staffId);
    console.log('Password:', password);

    // You can redirect or show a success message here
    alert('Login successful!');
});
