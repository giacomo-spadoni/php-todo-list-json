<?php

if (isset($_POST["text"])) {

    // leggo il file json
    $fileContent = file_get_contents("dati.json");
    // converto il json in php
    $todoList = json_decode($fileContent, true);
    // creo una nuova task
    $task = $_POST["text"];
    // pusho la task appena creata
    $todoList[] = $task;
    // converto tutto in jason
    $taskJson = json_encode($todoList);
    // scrivo il json su disco
    file_put_contents("dati.json", $taskJson);


    echo "ho ricevuto dei dati $task";
} else {
    $todoList = file_get_contents("dati.json");

    header('Content-Type: application/json');

    echo $todoList;
}
