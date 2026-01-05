<?php

require_once __DIR__ . '/helpers.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Получил данные с формы
    $login = $_POST['login'];
    $password = $_POST['password'];
    $pattern = '/^[a-zA-Z0-9]+$/';

    // запись в БД

    $connect = getDB();

    $check_sql = "SELECT * FROM `users` WHERE `login` = '$login'"; // Нужны для корректного увеличения id в bd
    $check_result = mysqli_query($connect, $check_sql);            // иначе при false будет фантомно увеличивать
    if (mysqli_num_rows($check_result) > 0) {
        echo 'error! user already exists';
    } else {
        if ($password && preg_match($pattern, $password)) {
        $sql = "INSERT INTO `users` (login, password) VALUES ('$login', '$password')";
        $result = mysqli_query($connect, $sql);
        header('location: ../html/registration.html?registered=1');
        exit;
        }
        else echo 'Passwords does`nt match or contains not allowed symbols';
    };
}
