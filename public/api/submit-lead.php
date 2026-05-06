<?php

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');

if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['health'])) {
    echo json_encode([
        'ok' => true,
        'php' => PHP_VERSION,
        'curl' => function_exists('curl_init'),
        'allow_url_fopen' => (bool)ini_get('allow_url_fopen'),
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'ok' => false,
        'error' => 'Method not allowed.',
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

const TELEGRAM_BOT_TOKEN = '8551729344:AAE69EOihjjc-JF02TqsfRv60arDZwGKA54';
const TELEGRAM_CHAT_ID = '-5107045462';

$rawBody = file_get_contents('php://input');
$payload = json_decode($rawBody ?: '', true);

if (!is_array($payload)) {
    $payload = $_POST;
}

if (!is_array($payload)) {
    http_response_code(400);
    echo json_encode([
        'ok' => false,
        'error' => 'Invalid payload.',
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

$honeypot = trim((string)($payload['website'] ?? ''));
if ($honeypot !== '') {
    echo json_encode([
        'ok' => true,
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

$name = trim((string)($payload['name'] ?? ''));
$email = trim((string)($payload['email'] ?? ''));
$messenger = trim((string)($payload['messenger'] ?? ''));
$comment = trim((string)($payload['comment'] ?? ''));
$plan = trim((string)($payload['plan'] ?? ''));
$formType = trim((string)($payload['formType'] ?? 'Заявка'));
$submittedAt = trim((string)($payload['submittedAt'] ?? ''));
$pageUrl = trim((string)($payload['pageUrl'] ?? ''));

if ($name === '' || $email === '' || $messenger === '') {
    http_response_code(422);
    echo json_encode([
        'ok' => false,
        'error' => 'Заполните обязательные поля.',
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode([
        'ok' => false,
        'error' => 'Некорректный email.',
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

function escapeTelegram(string $value): string
{
    return htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

function sendTelegramMessage(array $params): array
{
    $url = 'https://api.telegram.org/bot' . TELEGRAM_BOT_TOKEN . '/sendMessage';
    $body = http_build_query($params);

    if (function_exists('curl_init')) {
        $ch = curl_init($url);
        curl_setopt_array($ch, [
            CURLOPT_POST => true,
            CURLOPT_POSTFIELDS => $body,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_TIMEOUT => 10,
            CURLOPT_HTTPHEADER => ['Content-Type: application/x-www-form-urlencoded'],
        ]);

        $response = curl_exec($ch);
        $statusCode = (int)curl_getinfo($ch, CURLINFO_HTTP_CODE);
        $error = curl_error($ch);
        curl_close($ch);

        if ($response === false) {
            return ['ok' => false, 'error' => $error ?: 'curl_exec failed'];
        }

        return ['ok' => $statusCode >= 200 && $statusCode < 300, 'body' => $response];
    }

    $context = stream_context_create([
        'http' => [
            'method' => 'POST',
            'header' => "Content-Type: application/x-www-form-urlencoded\r\n",
            'content' => $body,
            'timeout' => 10,
        ],
    ]);

    $response = file_get_contents($url, false, $context);
    $statusLine = $http_response_header[0] ?? '';
    $isOk = strpos($statusLine, '200') !== false;

    return ['ok' => $isOk, 'body' => $response ?: ''];
}

$lines = [
    '🔥 <b>Новая заявка</b>',
    '',
    'Форма: <b>' . escapeTelegram($formType) . '</b>',
    'Тариф: <b>' . escapeTelegram($plan !== '' ? $plan : 'Не выбран') . '</b>',
    'Имя: <b>' . escapeTelegram($name) . '</b>',
    'Email: <b>' . escapeTelegram($email) . '</b>',
    'Telegram / WhatsApp: <b>' . escapeTelegram($messenger) . '</b>',
];

if ($comment !== '') {
    $lines[] = 'Комментарий: ' . escapeTelegram($comment);
}

if ($submittedAt !== '') {
    $lines[] = 'Время: ' . escapeTelegram($submittedAt);
}

if ($pageUrl !== '') {
    $lines[] = 'Страница: ' . escapeTelegram($pageUrl);
}

try {
    $result = sendTelegramMessage([
        'chat_id' => TELEGRAM_CHAT_ID,
        'text' => implode("\n", $lines),
        'parse_mode' => 'HTML',
        'disable_web_page_preview' => 'true',
    ]);
} catch (Throwable $error) {
    http_response_code(500);
    echo json_encode([
        'ok' => false,
        'error' => 'PHP error: ' . $error->getMessage(),
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

if (!$result['ok']) {
    http_response_code(502);
    echo json_encode([
        'ok' => false,
        'error' => 'Telegram delivery failed. ' . trim((string)($result['error'] ?? $result['body'] ?? '')),
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

echo json_encode([
    'ok' => true,
], JSON_UNESCAPED_UNICODE);
