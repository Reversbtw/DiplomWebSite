<?php
require_once '../config/database.php';

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);

if (!isset($data['name']) || !isset($data['email']) || !isset($data['password'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing required fields']);
    exit;
}

$name = trim($data['name']);
$email = trim($data['email']);
$password = $data['password'];

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email format']);
    exit;
}

$stmt = $pdo->prepare("SELECT id FROM users WHERE email = ?");
$stmt->execute([$email]);
if ($stmt->fetch()) {
    http_response_code(400);
    echo json_encode(['error' => 'Email already registered']);
    exit;
}

try {
    $pdo->beginTransaction();

    $stmt = $pdo->prepare("INSERT INTO users (name, email, password) VALUES (?, ?, ?)");
    $stmt->execute([$name, $email, $password]);
    $userId = $pdo->lastInsertId();

    $token = bin2hex(random_bytes(32));
    $stmt = $pdo->prepare("INSERT INTO tokens (user_id, token) VALUES (?, ?)");
    $stmt->execute([$userId, $token]);

    $pdo->commit();

    setcookie('auth_token', $token, time() + (86400 * 30), '/', '', true, true); // 30 days, secure, httponly

    echo json_encode([
        'success' => true,
        'user' => [
            'id' => $userId,
            'name' => $name,
            'email' => $email
        ]
    ]);
} catch (Exception $e) {
    $pdo->rollBack();
    http_response_code(500);
    echo json_encode(['error' => 'Registration failed']);
} 