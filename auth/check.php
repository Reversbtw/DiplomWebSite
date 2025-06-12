<?php
require_once '../config/database.php';

header('Content-Type: application/json');

function checkAuth() {
    global $pdo;
    
    if (!isset($_COOKIE['auth_token'])) {
        return null;
    }

    $token = $_COOKIE['auth_token'];
    
    try {
        $stmt = $pdo->prepare("
            SELECT u.id, u.name, u.email 
            FROM users u 
            JOIN tokens t ON u.id = t.user_id 
            WHERE t.token = ?
        ");
        $stmt->execute([$token]);
        return $stmt->fetch();
    } catch (Exception $e) {
        return null;
    }
}

$user = checkAuth();
echo json_encode([
    'authenticated' => $user !== null,
    'user' => $user
]); 