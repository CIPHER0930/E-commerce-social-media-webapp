<?php

// Check if the user is logged in
if (isset($_SESSION['user'])) {
    // The user is logged in, redirect them to the home page
    header('Location: index.php');
} else {
    // The user is not logged in, check their credentials
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Connect to the database
    $db = new PDO('mysql:host=localhost;dbname=if0_34643283_DB', 'root', '');

    // Check if the user exists
    $query = $db->query("SELECT * FROM users WHERE email='$email' AND password='$password'");
    $user = $query->fetch();

    // If the user exists, log them in
    if ($user) {
        $_SESSION['user'] = $user['id'];
        header('Location: index.php');
    } else {
        // The user does not exist, redirect them to the login page
        header('Location: login.php');
    }
}

?>
