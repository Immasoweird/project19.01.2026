<?php
require_once __DIR__ . '/helpers.php';
session_start();

$connect = getDB();

$userID = $_SESSION['user']['id'] ?? null;

// Если нет сессии — сразу на логин
if (empty($userID)) {
    header("Location: ../html/registration.html");
    exit;
}

$sql = "SELECT * FROM `users` WHERE `id` = '$userID'";

$result = mysqli_query($connect, $sql); //equal $connect->query($sql);
$result = mysqli_fetch_all($result);
$login = '';
foreach ($result as $item) {
    $login = $item[1];
}


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="../js/registration.js" defer></script>
</head>
<body>
<p>personal cab. Welcome, <?= $login ?></p>

<a href="logout.php">Log out</a>
</body>
</html>