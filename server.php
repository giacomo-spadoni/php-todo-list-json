<?php

$todoList = [
    "fare colazione",
    "seguire le lezioni",
    "prendere shake di proteine",
    "preparare il pranzo",
    "andare in palestra",
    "fare l'esercizio",
    "andare a fare la spesa",
    "preparare la cena",
    "guardare netflix",
    "andare a dormire",
];




header('Content-Type: application/json');

$jsonString = json_encode($todoList);

echo $jsonString;
