<!DOCTYPE html>
<html>
<head>
    <title>Form Submission</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<h1>Thank You for Contacting Us</h1>

<?php
if (empty($_POST["name"]) || empty($_POST["email"]) || empty($_POST["message"])) {
    echo "<p style='color:red;'>Error: All fields are required.</p>";
} else {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    echo "<p><strong>Name:</strong> $name</p>";
    echo "<p><strong>Email:</strong> $email</p>";
    echo "<p><strong>Message:</strong> $message</p>";
}
?>

<p><a href="contact.html">Go Back</a></p>

</body>
</html>