<?php
// Database connection configuration
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "investment";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve updated information from form
$id = $_POST['id'];
$name = $_POST['name'];
$email = $_POST['email'];

// Update user information in the database
$sql = "UPDATE users SET name='$name', email='$email' WHERE id=$id";

if ($conn->query($sql) === TRUE) {
    echo "User information updated successfully";
} else {
    echo "Error updating user information: " . $conn->error;
}

// Close database connection
$conn->close();
?>