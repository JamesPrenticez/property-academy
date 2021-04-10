<?php
$servername = "localhost";
$database = "newsletter";
$username = "kkza";
$password = "kokomo";
$table = "users";  
// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";

$fname= $_POST['fname']; 
$lname= $_POST['lname']; 
$email= $_POST['email']; 
$city= $_POST['city']; 
$letter= $_POST['message'];
$cellphone= $_POST['cellphone'];

$query = "INSERT INTO $table (fname, lname, email, city, letter, cellphone) VALUES ('$fname', '$lname', '$email', '$city', '$message', '$cellphone')";
if(mysqli_query($conn, $query)){
    echo "Records inserted successfully.";
} else{
    echo "ERROR: Could not able to execute $query. " . mysqli_error($conn);
}
 
echo 'You have been successfully added.' . '<br>'; 
 
mysqli_close($conn); 
 
?> 