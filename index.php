<?php
  require_once 'forms/php-i18n-4.0.1/i18n.class.php';
  require_once 'update_language.php';
  $i18n = new i18n('forms/php-i18n-4.0.1/lang/lang_{LANGUAGE}.json', 'forms/php-i18n-4.0.1/langcache/', 'en','l');
  $i18n->init();
?>

<!DOCTYPE html>
<html lang="<?php echo $_SESSION["lang"];?>">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport">
  <meta name="keywords" content="Ramasolutions,Rama solutions,Rama-solutions,Ramasolution,Rama solution,Rama-solution,programmation,développement,web,logiciel,mobile,bureau,boite,application,web,entreprise,société,site,Tunis,Tunisia,Tunisie,Mannouba,Ariana,BDSI,saisie,traitement,données,informations,informatique" />
    <meta name="news_keywords" content="Python,Django,React,WordPress,Prestashop,JavaScript,CSS,HTML,Flutter,Android,Ios,Php,Nodejs,Springboot" />
  <title><?php echo l::title;?></title>
  <meta content="" name="descriptison" content="Rama solutions is a professionnal growing team in Tunisia of talented engineers providing IT technology services & solutions to startups and business locally & globally with the best prices in the market">

  <!-- Favicons -->
  <link href="assets/img/ramafav.ico" rel="icon">

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Poppins:300,400,500,700" rel="stylesheet">

  <!-- Vendor CSS Files -->
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="assets/vendor/owl.carousel/assets/owl.carousel.min.css" rel="stylesheet">
  <link href="assets/vendor/aos/aos.css" rel="stylesheet">

  <!-- Template Main CSS File -->
  <link href="assets/css/style.css" rel="stylesheet">
  <link rel="stylesheet" href="assets/fontawesome-5.15.1-web/css/all.min.css">
  <link rel="stylesheet" type="text/css" href="assets/css/technologie.css">
  <link rel="stylesheet" href="assets/css/load.css">
</head>

<body class="body-preloader">

  <!-- ======= load ======= -->
  <div class="loader-container" id="b_top">
          <img src="./assets/img/onload.png" alt="">

        <div class="vertical">
          <div class="scene">
            <div class="ring"></div>
          </div>
          <div class="scene">
            <div class="ring"></div>
          </div>
          <div class="scene">
            <div class="ring"></div>
          </div>
          <div class="scene">
            <div class="ring"></div>
          </div>
          <div class="scene">
            <div class="ring"></div>
          </div>
          <div class="scene">
            <div class="ring"></div>
          </div>
        </div>

  </div>
   
  <!-- ======= end load ======= -->

  <!-- ======= Header ======= -->
  <header id="header" class="header-transparent">
    <div class="container">

      <div id="logo" class="pull-left">
        <a href="/"><img src="assets/img/logo.png" alt=""></a>
      </div>

      <nav id="nav-menu-container">
        <ul class="nav-menu">
          <li class="menu-active"><a href="#b_top"><?php echo l::nav_menu_home;?></a></li>
          <li><a href="#about"><?php echo l::nav_menu_about;?></a></li>
          <li><a href="#services"><?php echo l::nav_menu_services;?></a></li>
          <li><a href="#technologies"><?php echo l::nav_menu_technologies;?></a></li>
          <li><a href="#contact"><?php echo l::nav_menu_contact;?></a></li>
          <li>
          <div class="switch-lang"> 
            <div class="current-lang"><img class="lang-flag" src="assets/img/<?php echo $_SESSION["lang"];?>.png"/>
              <p class="lang-text"><?php echo l($_SESSION["lang"]);?></p>
            </div>
            <div class="lang-dropdown">
              <?php foreach($languages as $l) {
                if ($l != $_SESSION["lang"]){
              echo '<div class="selecting-lang" lang="'.$l.'"><img class="lang-flag" src="assets/img/'.$l.'.png"/>
                <p class="lang-text">'.l($l).'</p></div>';}}?>
              </div>
            </div>
          </div>
          </li>
        </ul>
      </nav>
    </div>

  </header>

  <!-- End Header -->
  <!-- ======= Hero Section ======= -->
   
  <section id="hero">
    <div class="hero-container" data-aos="zoom-in" data-aos-delay="100">
      <h1><?php echo l::hero_h1; ?></h1>
      <h2><?php echo l::hero_h2; ?></h2>
      <a href="#about" class="btn-get-started"><?php echo l::hero_a; ?></a>
    </div>
    <video src="./assets/img/rama.mp4" type="video/mp4"  autoplay loop muted></video>
  </section>
  <!-- End Hero Section -->

  <main id="main">
    <!-- ======= About Section ======= -->
    <section id="about">
      <div class="container" data-aos="fade-up">
        <div class="row about-container">
          <div class="col-lg-6 content order-lg-1 order-2">
            <h2 class="title"><?php echo l::about_h2; ?></h2>
            <p><?php echo l::about_p; ?></p>
            <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
              <div class="icon"><i class="fas fa-tools"></i></div>
              <h4 class="title"><?php echo l::about_div1_h4; ?></h4>
              <p class="description"><?php echo l::about_div1_p; ?></p>
            </div>
            <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
              <div class="icon"><i class="fas fa-magic"></i></div>
              <h4 class="title"><?php echo l::about_div2_h4; ?></h4>
              <p class="description"><?php echo l::about_div2_p; ?></p>
            </div>
            <div class="icon-box" data-aos="fade-up" data-aos-delay="300">
              <div class="icon"><i class="far fa-file-code"></i></div>
              <h4 class="title"><?php echo l::about_div3_h4; ?></h4>
             <p class="description"><?php echo l::about_div3_p; ?></p>
           </div>
            <div class="icon-box" data-aos="fade-up" data-aos-delay="400">
              <div class="icon"><i class="fas fa-truck"></i></div>
              <h4 class="title"><?php echo l::about_div4_h4; ?></h4>
              <p class="description"><?php echo l::about_div4_p; ?></p>
            </div>
          </div>

          <div class="col-lg-6 background order-lg-2 order-1" data-aos="fade-left" data-aos-delay="100"></div>
        </div>

      </div>
    </section><!-- End About Section -->


    <!-- ======= Services Section ======= -->
    <section id="services">
      <div class="container" data-aos="fade-up">
        <div class="section-header">
          <h3 class="section-title"><?php echo l::services_h3; ?></h3>
          <p class="section-description"><?php echo l::services_p; ?></p>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6" data-aos="zoom-in">
            <div class="box">
              <div class="icon"><a ><i class="fas fa-code"></i></a></div>
              <h4 class="title"><?php echo l::services_div1_h4; ?></h4>
              <p class="description"><?php echo l::services_div1_p; ?></p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6" data-aos="zoom-in">
            <div class="box">
              <div class="icon"><a ><i class="fab fa-android"></i></a></div>
              <h4 class="title"><?php echo l::services_div2_h4; ?></h4>
              <p class="description"><?php echo l::services_div2_p; ?></p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6" data-aos="zoom-in">
            <div class="box">
              <div class="icon"><i class="fas fa-desktop"></i></a></div>
              <h4 class="title"><?php echo l::services_div3_h4; ?></h4>
              <p class="description"><?php echo l::services_div3_p; ?></p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6" data-aos="zoom-in">
            <div class="box">
              <div class="icon"><a ><i class="fas fa-robot"></i></a></div>
              <h4 class="title"><?php echo l::services_div4_h4; ?></h4>
              <p class="description"><?php echo l::services_div4_p; ?></p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6" data-aos="zoom-in">
            <div class="box">
              <div class="icon"><a ><i class="fas fa-gamepad"></i></a></div>
              <h4 class="title"><?php echo l::services_div5_h4; ?></h4>
              <p class="description"><?php echo l::services_div5_p; ?></p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6" data-aos="zoom-in">
            <div class="box">
              <div class="icon"><a ><i class="fas fa-city"></i></a></div>
              <h4 class="title"><?php echo l::services_div6_h4; ?></h4>
              <p class="description"><?php echo l::services_div6_p; ?></p>
            </div>
          </div>
        </div>

      </div>
    </section><!-- End Services Section -->




    <!-- ======= Call To Action Section ======= -->
    <section id="call-to-action">
      <div class="container">
        <div class="row" data-aos="zoom-in">
          <div class="col-lg-9 text-center text-lg-left">
            <h3 class="cta-title"><?php echo l::call_to_action_h3; ?></h3>
            <p class="cta-text"><?php echo l::call_to_action_p; ?></p>
          </div>
          <div class="col-lg-3 cta-btn-container text-center">
            <a class="cta-btn align-middle" href="#contact"><?php echo l::call_to_action_a; ?></a>
          </div>
        </div>

      </div>
    </section><!-- End Call To Action Section -->

       <!-- ======= Technologies Section ======= -->   

    <section _tech-item class="technologies-section aos-animate" id="technologies" >
      <div _tech-item class="container-t">
         <h2 _tech-item class="mrg-b">Technologies we work with</h2>
         <div _tech-item class="technologies-tab" data-aos="fade-up">
            <ul _tech-item class="nav-t nav-tabs" role="tablist">
          
       <li _tech-item class="nav-item active"><a _tech-item data-toggle="tab" role="tab" class="nav-link active" href="#mobile" aria-label="Mobile" aria-selected="true"> Mobile </a></li>
               <li _tech-item class="nav-item"><a _tech-item data-toggle="tab" role="tab" class="nav-link" href="#frontend" aria-label="Frontend" aria-selected="false"> Frontend </a></li>
               <li _tech-item class="nav-item"><a _tech-item data-toggle="tab" role="tab" class="nav-link" href="#database" aria-label="Database" aria-selected="false"> Database </a></li>
               <li _tech-item class="nav-item"><a _tech-item data-toggle="tab" role="tab" class="nav-link" href="#backend" aria-label="Backend"> Backend </a></li>
               <li _tech-item class="nav-item"><a _tech-item data-toggle="tab" role="tab" class="nav-link" href="#cms" aria-label="CMS"> CMS </a></li>
               <li _tech-item class="nav-item"><a _tech-item data-toggle="tab" role="tab" class="nav-link" href="#infra-devops" aria-label="Infra %26 DevOps"> Infra & DevOps </a></li>
            </ul>
            <div _tech-item class="tab-content" data-aos="fade-up" >
              <div _tech-item role="tabpanel" class="tab-pane fade show in active" >
                  <div _tech-item class="row-t"><div _tech-item class="col-4 col-sm-4 col-md-3 col-lg-2"><div _tech-item class="icon-block" aria-label=""><div _tech-item class="icon-box"> <img src="assets/img/Mobile/Android.svg" ></div><h5 _tech-item>Android</h5></div></div><div _tech-item class="col-4 col-sm-4 col-md-3 col-lg-2"><div _tech-item class="icon-block" aria-label=""><div _tech-item class="icon-box"> <img src="assets/img//Mobile/Flutter.svg" ></div><h5 _tech-item>Flutter</h5></div></div><div _tech-item class="col-4 col-sm-4 col-md-3 col-lg-2"><div _tech-item class="icon-block" aria-label=""><div _tech-item class="icon-box"> <img src="assets/img/Mobile/Ionic.svg" ></div><h5 _tech-item>Ionic</h5></div></div><div _tech-item class="col-4 col-sm-4 col-md-3 col-lg-2"><div _tech-item class="icon-block" aria-label=""><div _tech-item class="icon-box"> <img src="assets/img/Mobile/IOS.svg" ></div><h5 _tech-item>IOS</h5></div></div><div _tech-item class="col-4 col-sm-4 col-md-3 col-lg-2"><div _tech-item class="icon-block" aria-label=""><div _tech-item class="icon-box"> <img src="assets/img/Mobile/Kotlin.svg" ></div><h5 _tech-item>Kotlin</h5></div></div><div _tech-item class="col-4 col-sm-4 col-md-3 col-lg-2"><div _tech-item class="icon-block" aria-label=""><div _tech-item class="icon-box"> <img src="assets/img/Mobile/ObjectiveC.svg" ></div><h5 _tech-item>ObjectiveC</h5></div></div><div _tech-item class="col-4 col-sm-4 col-md-3 col-lg-2"><div _tech-item class="icon-block" aria-label=""><div _tech-item class="icon-box"> <img src="assets/img/Mobile/React Native.svg" ></div><h5 _tech-item>React Native</h5></div></div><div _tech-item class="col-4 col-sm-4 col-md-3 col-lg-2"><div _tech-item class="icon-block" aria-label=""><div _tech-item class="icon-box"> <img src="assets/img/Mobile/Swift.svg" ></div><h5 _tech-item>Swift</h5></div></div><div _tech-item class="col-4 col-sm-4 col-md-3 col-lg-2"><div _tech-item class="icon-block" aria-label=""><div _tech-item class="icon-box"> <img src="assets/img/Mobile/Titanium.svg" ></div><h5 _tech-item>Titanium</h5></div></div><div _tech-item class="col-4 col-sm-4 col-md-3 col-lg-2"><div _tech-item class="icon-block" aria-label=""><div _tech-item class="icon-box"> <img src="assets/img/Mobile/Xamarin.svg" ></div><h5 _tech-item>Xamarin</h5></div></div></div>
               </div>
           </div>
         </div>
      </div>
   </section>

    <!-- ======= End Technologies Section ======= -->   


    <!-- ======= Contact Section ======= -->

    <section id="contact">
      <div class="container">
        <div class="section-header">
          <h3 class="section-title"><?php echo l::contact_h3; ?></h3>
          <p class="section-description"><?php echo l::contact_p; ?></p>
        </div>
      </div>


      <section class="location aos-animate" >
        <div class="location-container" data-aos="fade-right" >
          <div class="wrap"><h5><?php echo l::contact_h5_1; ?></h5>
<div class="contact-row"><i class="fas fa-phone"></i><?php echo l::contact_i1; ?></div>
<div class="contact-row"><i class="fas fa-phone"></i><?php echo l::contact_i2; ?></div>
<div class="contact-row"><i class="fas fa-map-marker-alt"></i><?php echo l::contact_i3; ?></div>
<div class="contact-row"><i class="far fa-envelope"></i>contact@ramasolutions.tech</div>
<h5><?php echo l::contact_h5_2; ?></h5>
<div class="work-time">
<div class="o-row"><?php echo l::contact_div1_text; ?><span><?php echo l::contact_div1_span; ?></span></div>
<div class="o-row"><?php echo l::contact_div2_text; ?><span><?php echo l::contact_div2_span; ?></span></div>

</div></div></div>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d798.0687794532226!2d10.189586488150203!3d36.85983307176502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDUxJzM1LjQiTiAxMMKwMTEnMjQuNSJF!5e0!3m2!1sfr!2stn!4v1603383291584!5m2!1sfr!2stn" width="100%" height="380" frameborder="0" style="border:0" allowfullscreen></iframe>
      </section>

</section>



<!-- =======footer section======= -->

<footer class="new_footer_area bg_color" data-aos="fade-up">
  <div class="new_footer_top">
      <div class="container">
          <div class="row">
                  <div class="f_widget company_widget footer-block-1" >
                      <h3 class="f-title f_600 t_color f_size_18"><?php echo l::footer_newsletter_h3; ?></h3>
                      <p><?php echo l::footer_newsletter_p; ?></p>
                      <form action="forms/newsletter.php" method="post" role="form" class="php-email-form" class=form>
                        <div class="form-group">
                        <input type="email" class="form-control" name="email" id="sub_email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email">
                        <div class="validate"></div>
                       </div>
                       <div class="mb-3">
                       <div class="loading"><?php echo l::footer_newsletter_div; ?></div>
                       <div class="error-message"></div>
                       <div class="sent-message"></div>
                    </div>
                          <button class="btn btn_get btn_get_two" type="submit"><?php echo l::footer_newsletter_button; ?></button>
                      </form>
                  </div>
              
              
                <div class="f_widget social-widget footer-block-2">
                    <h3 class="f-title f_600 t_color f_size_18"><?php echo l::footer_social_media; ?></h3>
                    <div class="f_social_icon">
                        <a  target="_blank"><i class="fab fa-facebook"></i></a>
                        <a  target="_blank"><i class="fab fa-github"></i></a>
                        <a  target="_blank"><i class="fab fa-linkedin"></i></a>
                        <a  target="_blank"><i class="fab fa-twitter"></i></a>
                    </div>
                </div>

              
              <div class="footer-block-3">
                <h3 class="f-title f_600 t_color f_size_18"><?php echo l::footer_get_in_touch_h3; ?></h3>
                <div class="form">
                  <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                    <div class="form-group">
                      <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars">
                      <div class="validate"></div>
                    </div>
                    <div class="form-group">
                      <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email">
                      <div class="validate"></div>
                    </div>
                    <div class="form-group">
                      <select name="select_service" id="select_service" class="selectpicker form-control" data-style="btn-white">
                        <option value="Web Development"><?php echo l::footer_get_in_touch_select_opt1; ?></option>
                        <option value="Mobile Development"><?php echo l::footer_get_in_touch_select_opt2; ?></option>
                        <option value="Graphic Design"><?php echo l::footer_get_in_touch_select_opt3; ?></option>
                        <option value="Desktop Apps"><?php echo l::footer_get_in_touch_select_opt4; ?></option>
                        <option value="Automation And Bots"><?php echo l::footer_get_in_touch_select_opt5; ?></option>
                        <option value="Game Development"><?php echo l::footer_get_in_touch_select_opt6; ?></option>
                        <option value="IOT"><?php echo l::footer_get_in_touch_select_opt7; ?></option>
                        <option value="Others"><?php echo l::footer_get_in_touch_select_opt8; ?></option>
                      </select>
                      <div class="validate"></div>
                    </div>
                    <div class="form-group">
                      <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message" style="margin-top: 0px; margin-bottom: 0px; height: 86px;"></textarea>
                      <div class="validate"></div>
                    </div>
                      <div class="mb-3">
                      <div class="loading"><?php echo l::footer_get_in_touch_div; ?></div>
                      <div class="error-message"></div>
                      <div class="sent-message"></div>
                    </div>
                    <button type="submit" class="btn btn_get btn_get_two"><?php echo l::footer_get_in_touch_button; ?></button>
                  </form>
                </div>
              </div>
          </div>
      </div>
  </div>
<div class="footer_bottom"><span>Made with <i class="fa fa-heart pulse"></i> in <span class="Tunisia">Tunisia.</span></span>
</div>
</footer>




      <!-- ======= End Footer======= -->

  <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>

  <!-- Vendor JS Files -->
  <script src="assets/vendor/jquery/jquery.min.js"></script>
  <script src="assets/vendor/jquery.easing/jquery.easing.min.js"></script>
  <script src="assets/vendor/php-email-form/validate.js"></script>
  <script src="assets/vendor/counterup/counterup.min.js"></script>
  <script src="assets/vendor/superfish/superfish.min.js"></script>
  <script src="assets/vendor/hoverIntent/hoverIntent.js"></script>
  <script src="assets/vendor/owl.carousel/owl.carousel.min.js"></script>
  <script src="assets/vendor/venobox/venobox.min.js"></script>
  <script src="assets/vendor/aos/aos.js"></script>

  <!-- Template Main JS File -->
  <script src="assets/js/main.js"></script>
</main>
</body>
</html>
