<?php
// functions.php me BASE_URL define honi chahiye
include_once 'functions.php';

// Dynamic page title & description
$page = isset($page) ? $page : 'home';
$page_title = 'Home';
$meta_description = 'Global Self-Publishing Made Easy | Top Online Book Publishers';

switch($page){
    case 'about-us':
        $page_title = 'About Us | Book Publishing Pulse';
        $meta_description = 'Learn more about Book Publishing Pulse and our mission.';
        break;
    case 'contact-us':
    case 'contact':
        $page_title = 'Contact Us | Book Publishing Pulse';
        $meta_description = 'Get in touch with Book Publishing Pulse for any queries.';
        break;
    case 'services':
        $page_title = 'Our Services | Book Publishing Pulse';
        $meta_description = 'Explore our professional book publishing and writing services.';
        break;
    default:
        $page_title = 'Global Self-Publishing Made Easy | Top Online Book Publishers';
        $meta_description = 'Discover the top online book publishers for global self-publishing. Find the best self-publishing companies to bring your book to life efficiently and professionally.';
}
?>
<!DOCTYPE html>
<html lang="en-US">
<head>
    <meta charset="utf-8">
    <meta content="IE=edge" http-equiv="X-UA-Compatible">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <link rel="icon" type="image/png" href="<?php echo BASE_URL; ?>assets/images/fav-icon.png">
    <title><?php echo $page_title; ?></title>
    <meta content="<?php echo $meta_description; ?>" name="description">
    <meta content="" name="keywords">
    <link href="<?php echo BASE_URL; ?>assets/css/all03c7.css" rel="stylesheet">
    <link href="<?php echo BASE_URL; ?>assets/css/custom.css" rel="stylesheet">
    <meta name="google-site-verification" content="gxD1iRCH-I4eLjjlX0e0uglpUGV2F7dY_A1uT8D_d5E">
    
    <script>
        zE(function() {
            $zopim(function() {
              $zopim.livechat.setOnUnreadMsgs(unread);
              function unread(number) {
                  if (number>=1) $zopim.livechat.window.show();
              }
            });
        }); 
    </script>
</head>
<body>

<!-- Mobile Navigation -->
 <div class="mobile-nav">
      <nav>
        <ul class="unstyled mainnav pbpx-15">
          <li><a href="<?php echo BASE_URL; ?>">Home</a></li>
          <li><a href="<?php echo BASE_URL; ?>services">Services</a></li>
          <li><a href="<?php echo BASE_URL; ?>ghostwriting">Ghostwriting</a></li>
          
          <li>
            <a href="javascript:void(0)" class="">Fiction Writing  <i class="fa fa-angle-down"></i></a>
            <ul class="firstlevel unstyled" style="display: none;">
              <li><a href="<?php echo BASE_URL; ?>fiction">Fiction</a></li>
              <li><a href="<?php echo BASE_URL; ?>horror-writing">Horror Writing</a></li>
              <li><a href="<?php echo BASE_URL; ?>mystery-writing">Mystery Writing</a></li>
              <li><a href="<?php echo BASE_URL; ?>historical-writing">Historical Writing</a></li>
              <li><a href="<?php echo BASE_URL; ?>fantasy-writing">Fantasy Writing</a></li>
              <li><a href="<?php echo BASE_URL; ?>sci-fi-writing">Sc-Fi Writing</a></li>
            </ul>
          </li>

          <li>
            <a href="javascript:void(0)" class="">Non-Fiction Writing   <i class="fa fa-angle-down"></i></a>
            <ul class="firstlevel unstyled" style="display: none;">
              <li><a href="<?php echo BASE_URL; ?>non-fiction">Non-Fiction Writing</a></li>
              <li><a href="<?php echo BASE_URL; ?>memoir-writing">Memoir Writing</a></li>
              <li><a href="<?php echo BASE_URL; ?>children-books-writing">Children Book Writing</a></li>
              <li><a href="<?php echo BASE_URL; ?>autobiography-writing">Autobiography Writing</a></li>
              <li><a href="<?php echo BASE_URL; ?>scripts-writing">Script Writing</a></li>
              <li><a href="<?php echo BASE_URL; ?>song-writing">Song Writing</a></li>
              
            </ul>
          </li>

          <li>
            <a href="javascript:void(0)" class="">Book Editing   <i class="fa fa-angle-down"></i></a>
            <ul class="firstlevel unstyled" style="display: none;">
              <li><a class="dropdown-item" href="<?php echo BASE_URL; ?>editing">Book Editing</a></li>
              <li><a class="dropdown-item" href="<?php echo BASE_URL; ?>childrens-book-editing">Children's Book Editing</a></li>
              <li><a class="dropdown-item" href="<?php echo BASE_URL; ?>book-proofreading">Book Proofreading</a></li>
              <li><a class="dropdown-item" href="<?php echo BASE_URL; ?>book-formatting">Book Formatting</a></li>
            </ul>
          </li>


          <li><a href="<?php echo BASE_URL; ?>publishing">Book Publishing</a></li>
          <li><a href="<?php echo BASE_URL; ?>book-cover-design">Book Cover Design</a></li>
          <li><a href="<?php echo BASE_URL; ?>childrens-book-illustration">Childrens Book Illustration</a></li>
          <li><a href="<?php echo BASE_URL; ?>book-printing">Book Printing</a></li>
          <li><a href="<?php echo BASE_URL; ?>seo-content-writing">SEO Content Writing</a></li>
          <li><a href="<?php echo BASE_URL; ?>book-marketing">Book Marketing</a></li>
          <li><a href="<?php echo BASE_URL; ?>author-website-design">Author Website Design</a></li>
          <li><a href="<?php echo BASE_URL; ?>about-us">About Us</a></li>
          <li><a href="<?php echo BASE_URL; ?>contact-us">Contact Us</a></li>

        </ul>
      </nav>
    </div>
    <main class="app-container">
      <div class="mobile-nav-btn"> 
        <span class="lines"></span> 
      </div>
    </main>


    <!-- Header Section Begin -->

      <header>
        <div class="container">
          <div class="row">
            <div class="col-sm-3">
              <div class="logo_Sec_main">
                <a href="<?php echo BASE_URL; ?>"><img src="<?php echo BASE_URL; ?>assets/images/logo-new.png" alt="Book Publishing Pulse" title="Book Publishing Pulse"></a>
              </div>
            </div>
            <div class="col-sm-9">
              <div class="btn_header">
                <ul>
                  <li><a href="tel:516-558-6278" class="header_btn_one"> 516-558-6278 </a></li>
                  <!--<li><a href="tel:(626) 788-8375" class="header_btn_second">Landline (626) 788-8375 </a></li>-->
                  <li>
                    <a href="javascript:;" onclick="setButtonURL();" class="header_btn_second ">Live Chat</a>
                  </li>
                </ul>
              </div>
              <div class="main_menu_sec">
                <nav class="navbar navbar-expand-md p-0">
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                      <li class="nav-item active"><a href="<?php echo BASE_URL; ?>" class="nav-link">Home</a></li>
                      <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="<?php echo BASE_URL; ?>services" id="navbarDropdownMenuLink" aria-haspopup="true" aria-expanded="false">Our Services</a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                          <li class="dropdown-submenu"><a class="dropdown-item" href="<?php echo BASE_URL; ?>ghostwriting">Ghostwriting <span class="dropdown-toggle"></span></a>
                            <ul class="dropdown-menu">
                              <li><a class="dropdown-item" href="<?php echo BASE_URL; ?>fiction">Fiction Writing <span class="dropdown-toggle"></span></a>
                                    <ul class="dropdown-menu">
                                      <li><a class="dropdown-item" href="<?php echo BASE_URL; ?>horror-writing">Horror Writing</a></li>
                                      <li><a class="dropdown-item" href="<?php echo BASE_URL; ?>mystery-writing">Mystery Writing</a></li>
                                      <li><a class="dropdown-item" href="<?php echo BASE_URL; ?>historical-writing">Historical Writing</a></li>
                                      <li><a class="dropdown-item" href="<?php echo BASE_URL; ?>fantasy-writing">Fantasy Writing</a></li>
                                      <li><a class="dropdown-item" href="<?php echo BASE_URL; ?>sci-fi-writing">Sc-Fi Writing</a></li>
                                    </ul>
                              </li>
                              <li><a class="dropdown-item" href="non-fiction">Non-Fiction Writing <span class="dropdown-toggle"></span></a>
                                <ul class="dropdown-menu">
                                  <li><a class="dropdown-item" href="<?php echo BASE_URL; ?>memoir-writing">Memoir Writing</a></li>
                                  <li><a class="dropdown-item" href="<?php echo BASE_URL; ?>children-books-writing">Children Book Writing</a></li>
                                  <li><a class="dropdown-item" href="<?php echo BASE_URL; ?>autobiography-writing">Autobiography Writing</a></li>
                                  <li><a class="dropdown-item" href="<?php echo BASE_URL; ?>scripts-writing">Script Writing</a></li>
                                  <li><a class="dropdown-item" href="<?php echo BASE_URL; ?>song-writing">Song Writing</a></li>
                                </ul>
                              </li>
                            </ul>
                          </li>

                          <li class="dropdown-submenu"><a class="dropdown-item " href="editing">Book Editing <span class="dropdown-toggle"></span></a>
                            <ul class="dropdown-menu">
                              <li><a class="dropdown-item" href="<?php echo BASE_URL; ?>editing">Book Editing</a></li>
                              <li><a class="dropdown-item" href="<?php echo BASE_URL; ?>childrens-book-editing">Children's Book Editing</a></li>
                              <li><a class="dropdown-item" href="<?php echo BASE_URL; ?>book-proofreading">Book Proofreading</a></li>
                              <li><a class="dropdown-item" href="<?php echo BASE_URL; ?>book-formatting">Book Formatting</a></li>
                            </ul>
                          </li>

                          
                          <li class="dropdown-submenu"><a class="dropdown-item" href="publishing">Book Publishing</a></li>

                          <li class="dropdown-submenu"><a class="dropdown-item" href="<?php echo BASE_URL; ?>book-cover-design">Book Cover Design</a></li>
                          <li class="dropdown-submenu"><a class="dropdown-item" href="<?php echo BASE_URL; ?>childrens-book-illustration">Childrens Book Illustration</a></li>
                          <li class="dropdown-submenu"><a class="dropdown-item" href="<?php echo BASE_URL; ?>book-printing">Book Printing</a></li>
                          <li class="dropdown-submenu"><a class="dropdown-item" href="<?php echo BASE_URL; ?>seo-content-writing">SEO Content Writing</a></li>
                          <li class="dropdown-submenu"><a class="dropdown-item" href="<?php echo BASE_URL; ?>book-marketing">Book Marketing</a></li>
                          <li class="dropdown-submenu"><a class="dropdown-item" href="<?php echo BASE_URL; ?>author-website-design">Author Website Design</a></li>
                        </ul>
                      </li>
                      <li class="nav-item"><a class="nav-link" href="<?php echo BASE_URL; ?>about-us">About Us</a></li>

                      <li class="nav-item"><a class="nav-link" href="<?php echo BASE_URL; ?>contact-us">Contact Us</a></li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>

    <!-- Header Section End -->
