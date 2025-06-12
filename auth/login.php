<?php
require_once '../config/database.php';

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);

if (!isset($data['email']) || !isset($data['password'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing required fields']);
    exit;
}

$email = trim($data['email']);
$password = $data['password'];

try {
    $stmt = $pdo->prepare("SELECT id, name, email, password FROM users WHERE email = ? AND password = ?");
    $stmt->execute([$email, $password]);
    $user = $stmt->fetch();

    if (!$user) {
        http_response_code(401);
        echo json_encode(['error' => 'Invalid credentials']);
        exit;
    }

    $token = bin2hex(random_bytes(32));
    
    $stmt = $pdo->prepare("DELETE FROM tokens WHERE user_id = ?");
    $stmt->execute([$user['id']]);
    
    $stmt = $pdo->prepare("INSERT INTO tokens (user_id, token) VALUES (?, ?)");
    $stmt->execute([$user['id'], $token]);

    setcookie('auth_token', $token, time() + (86400 * 30), '/', '', true, true); // 30 days, secure, httponly

    echo json_encode([
        'success' => true,
        'user' => [
            'id' => $user['id'],
            'name' => $user['name'],
            'email' => $user['email']
        ]
    ]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Login failed']);
} 