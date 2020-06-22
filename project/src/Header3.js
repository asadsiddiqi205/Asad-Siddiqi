import React from "react";
import { Link, withRouter } from "react-router-dom";
class Header3 extends React.Component {
  constructor() {
    super();

    this.Logout = this.Logout.bind(this);
  }
  Logout() {}
  render() {
    return (
      <div>
        <html lang='en'>
          <head>
            <meta charset='UTF-8' />
            <title>CodePen - Bootstrap Navbar with Logo Centered Above</title>
            <link
              rel='stylesheet'
              href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css'
            />
            <link rel='stylesheet' href='./style.css' />
          </head>
          <body>
            <header role='banner'>
              <img
                id='logo-main'
                src='./download.png'
                width='200'
                alt='Logo Thing main logo'
              />
              <nav
                id='navbar-primary'
                class='navbar navbar-default'
                role='navigation'
              >
                <div class='container-fluid'>
                  <div class='navbar-header'>
                    <button
                      type='button'
                      class='navbar-toggle'
                      data-toggle='collapse'
                      data-target='#navbar-primary-collapse'
                    >
                      <span class='sr-only'>Toggle navigation</span>
                      <span class='icon-bar'></span>
                      <span class='icon-bar'></span>
                      <span class='icon-bar'></span>
                    </button>
                  </div>
                  <div
                    class='collapse navbar-collapse'
                    id='navbar-primary-collapse'
                  >
                    <ul class='nav navbar-nav'>
                      <li>
                        <Link to='/'>
                          <button onClick={this.Logout()}>Log Out</button>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </header>
            <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
            <script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js'></script>
          </body>
        </html>
      </div>
    );
  }
}
export default withRouter(Header3);
