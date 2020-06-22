import React from "react";
import Header from "./Header";

class App3 extends React.Component {
  constructor() {
    super();
    this.state = {
      fullname: "",
      email: "",
      password: "",
    };
    this.handlechange = this.handlechange.bind(this);
    this.submithandler = this.submithandler.bind(this);
  }
  submithandler() {
    fetch("http://localhost:5000/signup", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullname: this.state.fullname,
        email: this.state.email,
        password: this.state.password,
      }),
    });
  }
  handlechange(event) {
    const { name, value, checked, type } = event.target;
    event.target.type == "checkbox"
      ? this.setState({ [event.target.name]: event.target.checked })
      : this.setState({
          [event.target.name]: event.target.value,
        });
  }

  render() {
    return (
      <div>
        <Header></Header>
        <div>
          <html lang='en'>
            <head>
              <meta charset='UTF-8' />
              <meta
                name='viewport'
                content='width=device-width, initial-scale=1.0'
              />
              <meta http-equiv='X-UA-Compatible' content='ie=edge' />
              <title>Sign Up Form by Colorlib</title>

              <link
                rel='stylesheet'
                href='asset/fonts/material-icon/css/material-design-iconic-font.min.css'
              />

              <link rel='stylesheet' href='asset/css/style.css' />
            </head>
            <body>
              <div class='main'>
                <section class='signup'>
                  <div class='container'>
                    <div class='signup-content'>
                      <div class='signup-form'>
                        <h2 class='form-title'>Sign up</h2>
                        <form
                          method='POST'
                          class='register-form'
                          id='register-form'
                        >
                          <div class='form-group'>
                            <label for='name'>
                              <i class='zmdi zmdi-account material-icons-name'></i>
                            </label>
                            <input
                              type='text'
                              value={this.state.fullname}
                              name='fullname'
                              placeholder='fullname'
                              onChange={this.handlechange}
                            />
                          </div>
                          <div class='form-group'>
                            <label for='email'>
                              <i class='zmdi zmdi-email'></i>
                            </label>
                            <input
                              type='email'
                              value={this.state.email}
                              name='email'
                              placeholder='email'
                              onChange={this.handlechange}
                            />
                          </div>
                          <div class='form-group'>
                            <label for='pass'>
                              <i class='zmdi zmdi-lock'></i>
                            </label>
                            <input
                              type='password'
                              value={this.state.password}
                              name='password'
                              placeholder='password'
                              onChange={this.handlechange}
                            />
                          </div>
                          <div class='form-group'>
                            <label for='re-pass'>
                              <i class='zmdi zmdi-lock-outline'></i>
                            </label>
                            <input
                              type='password'
                              name='re_pass'
                              id='re_pass'
                              placeholder='Repeat your password'
                            />
                          </div>
                          <div class='form-group'>
                            <input
                              type='checkbox'
                              name='agree-term'
                              id='agree-term'
                              class='agree-term'
                            />
                            <label for='agree-term' class='label-agree-term'>
                              <span>
                                <span></span>
                              </span>
                              I agree all statements in{" "}
                              <a href='#' class='term-service'>
                                Terms of service
                              </a>
                            </label>
                          </div>
                        </form>
                        <div class='form-group form-button'>
                          <input
                            type='submit'
                            name='signup'
                            id='signup'
                            class='form-submit'
                            value='Register'
                            onClick={this.submithandler}
                          />
                        </div>
                      </div>
                      <div class='signup-image'>
                        <figure />
                        <img
                          src='asset/images/signup-image.jpg'
                          alt='sing up image'
                        />
                        <a href='#' class='signup-image-link'>
                          I am already member
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              <script src='asset/vendor/jquery/jquery.min.js'></script>
              <script src='asset/js/main.js'></script>
            </body>
          </html>
        </div>
      </div>
    );
  }
}
export default App3;
