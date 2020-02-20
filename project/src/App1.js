import React from 'react'
class App1 extends React.Component{

render(){
    return(
<div>

<html lang="en">

<head>

  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
  <meta name="description" content=""/>
  <meta name="author" content=""/>

  <title>New Age - Start Bootstrap Theme</title>

  
  <link href="Iaps/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>

  
  <link href="/Iaps/vendor/fontawesome-free/css/all.min.css" rel="stylesheet"/>
  <link rel="stylesheet" href="/Iaps/vendor/simple-line-icons/css/simple-line-icons.css"/>
  <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet"/>
  <link href="https://fonts.googleapis.com/css?family=Catamaran:100,200,300,400,500,600,700,800,900" rel="stylesheet"/>
  <link href="https://fonts.googleapis.com/css?family=Muli" rel="stylesheet"/>

  
  <link rel="stylesheet" href="/Iaps/device-mockups/device-mockups.min.css"/>

  
  <link href="/Iaps/css/new-age.min.css" rel="stylesheet"/>

</head>

<body id="page-top">

  
  <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <div className="container">
      <a className="navbar-brand js-scroll-trigger" href="#page-top">Start Bootstrap</a>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i className="fas fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#download">Download</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#features">Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <header className="masthead">
    <div className="container h-100">
      <div className="row h-100">
        <div className="col-lg-7 my-auto">
          <div className="header-content mx-auto">
            <h1 className="mb-5">New Age is an app landing page that will help you beautifully showcase your new mobile app, or anything else!</h1>
            <a href="#download" className="btn btn-outline btn-xl js-scroll-trigger">Start Now for Free!</a>
          </div>
        </div>
        <div className="col-lg-5 my-auto">
          <div className="device-container">
            <div className="device-mockup iphone6_plus portrait white">
              <div className="device">
                <div className="screen">
                
                  <img src="Iaps/img/demo-screen-1.jpg" className="img-fluid" alt=""/>
                </div>
                <div className="button">
    
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <section className="download bg-primary text-center" id="download">
    <div className="container">
      <div className="row">
        <div className="col-md-8 mx-auto">
          <h2 className="section-heading">Discover what all the buzz is about!</h2>
          <p>Our app is available on any mobile device! Download now to get started!</p>
          <div className="badges">
            <a className="badge-link" href="#"><img src="Iaps/img/google-play-badge.svg" alt=""/></a>
            <a className="badge-link" href="#"><img src="Iaps/img/app-store-badge.svg" alt=""/></a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="features" id="features">
    <div className="container">
      <div className="section-heading text-center">
        <h2>Unlimited Features, Unlimited Fun</h2>
        <p className="text-muted">Check out what you can do with this app theme!</p>
        <hr/>
      </div>
      <div className="row">
        <div className="col-lg-4 my-auto">
          <div className="device-container">
            <div className="device-mockup iphone6_plus portrait white">
              <div className="device">
                <div className="screen">
                  
                  <img src="Iaps/img/demo-screen-1.jpg" className="img-fluid" alt=""/>
                </div>
                <div className="button">
                
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8 my-auto">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6">
                <div className="feature-item">
                  <i className="icon-screen-smartphone text-primary"></i>
                  <h3>Device Mockups</h3>
                  <p className="text-muted">Ready to use HTML/CSS device mockups, no Photoshop required!</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="feature-item">
                  <i className="icon-camera text-primary"></i>
                  <h3>Flexible Use</h3>
                  <p className="text-muted">Put an image, video, animation, or anything else in the screen!</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="feature-item">
                  <i className="icon-present text-primary"></i>
                  <h3>Free to Use</h3>
                  <p className="text-muted">As always, this theme is free to download and use for any purpose!</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="feature-item">
                  <i className="icon-lock-open text-primary"></i>
                  <h3>Open Source</h3>
                  <p className="text-muted">Since this theme is MIT licensed, you can use it commercially!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="cta">
    <div className="cta-content">
      <div className="container">
        <h2>Stop waiting.<br/>Start building.</h2>
        <a href="#contact" className="btn btn-outline btn-xl js-scroll-trigger">Let's Get Started!</a>
      </div>
    </div>
    <div className="overlay"></div>
  </section>

  <section className="contact bg-primary" id="contact">
    <div className="container">
      <h2>We
        <i className="fas fa-heart"></i>
        new friends!</h2>
      <ul className="list-inline list-social">
        <li className="list-inline-item social-twitter">
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li className="list-inline-item social-facebook">
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
        </li>
        <li className="list-inline-item social-google-plus">
          <a href="#">
            <i className="fab fa-google-plus-g"></i>
          </a>
        </li>
      </ul>
    </div>
  </section>

  <footer>
    <div className="container">
      <p>&copy; Your Website 2019. All Rights Reserved.</p>
      <ul className="list-inline">
        <li className="list-inline-item">
          <a href="#">Privacy</a>
        </li>
        <li className="list-inline-item">
          <a href="#">Terms</a>
        </li>
        <li className="list-inline-item">
          <a href="#">FAQ</a>
        </li>
      </ul>
    </div>
  </footer>

  
  <script src="/Iaps/vendor/jquery/jquery.min.js"></script>
  <script src="/Iaps/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

  
  <script src="/Iaps/vendor/jquery-easing/jquery.easing.min.js"></script>

  
  <script src="/Iaps/js/new-age.min.js"></script>

</body>

</html>

</div>
        )    
}}

export default App1