 
<?php 
$user = "kkza";  
$password = "kokomo";  
$host = "160.153.65.133";  
$dbase = "newsletter";  
$table = "users";  
 
$first_name= $_POST['firstname']; 
$last_name= $_POST['lastname']; 
$email= $_POST['email']; 
$city= $_POST['city']; 
$subject= $_POST['subject']; 
  
// Connection to DBase  
$dbc= mysqli_connect($host,$user,$password, $dbase)  
or die("Unable to select database"); 
 
$query= "INSERT INTO $table  ". "VALUES ('$first_name', '$last_name', '$email')"; 
 
mysqli_query ($dbc, $query) 
or die ("Error querying database"); 
 
echo 'You have been successfully added.' . '<br>'; 
 
mysqli_close($dbc); 
 
?> 