<?php
include_once 'includes/functions.php';

// Get page from URL
$page = $_GET['page'] ?? 'home';

include_once 'includes/header.php';

// Allowed pages
$allowed_pages = ['home','about-us'];

if(in_array($page, $allowed_pages)){
    include_once "pages/{$page}.php";
} else {
    include_once "pages/home.php"; // fallback
}

include_once 'includes/footer.php';
