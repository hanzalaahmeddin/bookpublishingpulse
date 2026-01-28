<?php
// Detect localhost or live
if($_SERVER['HTTP_HOST'] == 'localhost'){
    define('BASE_URL', '/bookpublishingpulse/'); // replace 'project-root' with your folder
} else {
    define('BASE_URL', '/'); // live domain
}

// Mail function for contact form
function sendMail($to, $subject, $body){
    $headers = "From: noreply@yourdomain.com\r\n";
    return mail($to, $subject, $body, $headers);
}
