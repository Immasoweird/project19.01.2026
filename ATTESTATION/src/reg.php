<?php
// Отключаем автоматические исключения mysqli (чтобы ошибки возвращались, а не выбрасывались)
mysqli_report(MYSQLI_REPORT_OFF);

require_once __DIR__ . '/helpers.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Получил данные с формы
    $login = $_POST['login'];
    $password = $_POST['password'];
    $password2 = $_POST['password2'];

    $pattern = '/^[a-zA-Z0-9]+$/';
    $connect = getDB();

    $check_sql = "SELECT * FROM `users` WHERE `login` = '$login'"; // Нужны для корректного увеличения id в bd
    $check_result = mysqli_query($connect, $check_sql);            // иначе при false будет фантомно увеличивать
    if (mysqli_num_rows($check_result) > 0) {
        echo 'error! login already exists';
    } else {
        if ($password === $password2 && preg_match($pattern, $password)) {
        $sql = "INSERT INTO `users` (login, password) VALUES ('$login', '$password')";
        $result = mysqli_query($connect, $sql);
        header('location: ./login.html');
        }
        else echo 'Passwords does`nt match or contains not allowed symbols';
    };
}
