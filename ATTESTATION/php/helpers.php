<?php

const DB_HOST = "localhost";
const DB_USERNAME = "root";
const DB_PASS = "";
const DB_NAME = "dbPHP";

function getDB() {
    return mysqli_connect(DB_HOST, DB_USERNAME, DB_PASS, DB_NAME);
}

?>