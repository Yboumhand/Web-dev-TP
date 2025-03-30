<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Registration</title>
</head>
<body>

    <h2>PHP Form</h2>

    <form action="cible.php" method="POST">
        Name: <input type="text" name="name"><br><br>
        Email: <input type="text" name="email"><br><br>

        Gender:
        <input type="radio" name="gender" value="male"> Male
        <input type="radio" name="gender" value="female"> Female
        <input type="radio" name="gender" value="other"> Other <br><br>

        <input type="submit" value="Submit">
    </form>

</body>
</html>
