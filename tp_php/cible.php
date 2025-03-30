<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Confirmation</title>
</head>
<body>

    <h2>Registration Successful!</h2>

    <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $name = htmlspecialchars($_POST["name"]);
            $email = htmlspecialchars($_POST["email"]);
            $gender = htmlspecialchars($_POST["gender"]);

            echo "<p><strong>Name:</strong> $name</p>";
            echo "<p><strong>Email:</strong> $email</p>";
            echo "<p><strong>Gender:</strong> $gender</p>";
        } else {
            echo "<p>Error: No data received!</p>";
        }
    ?>

</body>
</html>
