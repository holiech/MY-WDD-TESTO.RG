<?php
// Database connection configuration
$servername = "localhost";
$username = "root";
$password = "Kenya";
$dbname = "investment";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve user input
$username = $_POST['username'];
$password = $_POST['password'];

// Validate user input (you may want to perform additional validation)
$username = mysqli_real_escape_string($conn, $username);
$password = mysqli_real_escape_string($conn, $password);

// Query database to check user credentials
$sql = "SELECT * FROM users WHERE username = '$username' AND password = '$password'";
$result = $conn->query($sql);

// Check if user exists and password is correct
if ($result->num_rows > 0) {
    // Authentication successful, redirect to dashboard or welcome page
    header("Location: dashboard.php");
} else {
    // Authentication failed, display error message or redirect to login page
    echo "Invalid username or password. Please try again.";
}

// Close database connection
$conn->close();
?>