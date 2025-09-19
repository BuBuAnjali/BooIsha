<?php
// VentraIP PHP form submission handler for Zoho Mail
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit();
}

try {
    // Get form data
    $firstname = trim($_POST['firstname'] ?? $_POST['name'] ?? '');
    $lastname = trim($_POST['lastname'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $phone = trim($_POST['phone'] ?? '');
    $subject = trim($_POST['subject'] ?? 'Website Contact');
    $message = trim($_POST['message'] ?? '');

    // Check for honeypot field (spam protection)
    if (!empty($_POST['_gotcha'])) {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => 'Spam detected']);
        exit();
    }

    // Validate required fields
    if (empty($firstname) || empty($email) || empty($message)) {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => 'Missing required fields']);
        exit();
    }

    // Validate email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => 'Invalid email address']);
        exit();
    }

    // Prepare email content
    $to = 'info@booisha.com.au';
    $emailSubject = '[BooIsha Website] ' . $subject;

    $emailBody = "NEW ENQUIRY FROM BOOISHA WEBSITE\n";
    $emailBody .= "================================\n\n";
    $emailBody .= "Customer Information:\n";
    $emailBody .= "👤 Name: {$firstname} {$lastname}\n";
    $emailBody .= "📧 Email: {$email}\n";
    $emailBody .= "📱 Phone: {$phone}\n\n";
    $emailBody .= "Enquiry Details:\n";
    $emailBody .= "📝 Subject: {$subject}\n\n";
    $emailBody .= "💬 Message:\n{$message}\n\n";
    $emailBody .= "Technical Information:\n";
    $emailBody .= "🕐 Submitted: " . date('Y-m-d H:i:s T') . "\n";
    $emailBody .= "🌐 IP Address: " . ($_SERVER['REMOTE_ADDR'] ?? 'Not available') . "\n";
    $emailBody .= "🖥️ User Agent: " . ($_SERVER['HTTP_USER_AGENT'] ?? 'Not available') . "\n\n";
    $emailBody .= "---\n";
    $emailBody .= "This email was automatically generated from the BooIsha website contact form.\n";
    $emailBody .= "Please reply directly to the customer's email: {$email}";

    // Email headers
    $headers = [
        'From' => 'BooIsha Website <noreply@booisha.com.au>',
        'Reply-To' => $email,
        'X-Mailer' => 'PHP/' . phpversion(),
        'Content-Type' => 'text/plain; charset=UTF-8'
    ];

    $headerString = '';
    foreach ($headers as $key => $value) {
        $headerString .= $key . ': ' . $value . "\r\n";
    }

    // Send email using PHP mail function
    $mailSent = mail($to, $emailSubject, $emailBody, $headerString);

    if ($mailSent) {
        // Log successful submission
        error_log("Form submission successful: {$firstname} {$lastname} <{$email}>");

        http_response_code(200);
        echo json_encode([
            'success' => true,
            'message' => "Thank you for your enquiry! We'll get back to you within 24 hours.",
            'submissionId' => uniqid(),
            'timestamp' => date('c')
        ]);
    } else {
        throw new Exception('Failed to send email');
    }

} catch (Exception $e) {
    error_log("Form submission error: " . $e->getMessage());

    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => 'Unable to process your submission. Please email us directly at info@booisha.com.au',
        'timestamp' => date('c')
    ]);
}
?>