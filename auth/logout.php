<?php
require_once '../config/database.php';

header('Content-Type: application/json');

if (isset($_COOKIE['auth_token'])) {
    $token = $_COOKIE['auth_token'];
    
    try {
        $stmt = $pdo->prepare("DELETE FROM tokens WHERE token = ?");
        $stmt->execute([$token]);
        
        setcookie('auth_token', '', time() - 3600, '/', '', true, true);
    } catch (Exception $e) {

    }
}

echo json_encode(['success' => true]); 