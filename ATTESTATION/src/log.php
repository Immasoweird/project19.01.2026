<?php
require_once __DIR__ . '/helpers.php';
session_start();

mysqli_report(MYSQLI_REPORT_OFF);

$login = $_POST['login'];
$password = $_POST['password'];

$connect = getDB();
$sql = "SELECT * FROM `users` WHERE `login` = ('$login') AND `password` = ('$password')";
$result = $connect->query($sql);
$row = $result->fetch_assoc();
if ($row) {
    echo "id: $row[id] <br> login: $row[login] <br>";
    $_SESSION['user']['id'] = $row['id'];
    print_r($_SESSION);
    header('location: ./lc.php');
    exit();

} else{
    echo 'error';
}

?>

