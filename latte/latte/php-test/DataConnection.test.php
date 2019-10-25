<?php
$pdo = new PDO('sqlite:example.db');



$result = $pdo->exec('CREATE TABLE person(name TEXT)');

echo "[RES: $result]";

$stmt = $pdo->query("SELECT name
                               FROM sqlite_master
                               WHERE type = 'table'
                               ORDER BY name");

while ($row = $stmt->fetch(\PDO::FETCH_ASSOC)) {
    $table = $row['name'];

    echo "[TBL: $table]";
}