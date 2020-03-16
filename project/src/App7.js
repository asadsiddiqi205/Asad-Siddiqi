import React from "react";

class App7 extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      loginstatus: ""
    };

    this.handlechange = this.handlechange.bind(this);
    this.submithandler = this.submithandler.bind(this);
  }
  handlechange(event) {
    const { name, value, checked, type } = event.target;
    event.target.type == "checkbox"
      ? this.setState({ [event.target.name]: event.target.checked })
      : this.setState({
          [event.target.name]: event.target.value
        });
  }
  submithandler() {
    fetch("http://localhost:5000/loginauth", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(res => res.text())
      .then(res => alert(res));
  }
  render() {
    return (
      <div>
        <html lang='en'>
          <head>
            <meta charset='UTF-8' />
            <meta
              name='viewport'
              content='width=device-width, initial-scale=1, shrink-to-fit=no'
            />
            <meta name='description' content='Colorlib Templates' />
            <meta name='author' content='Colorlib' />
            <meta name='keywords' content='Colorlib Templates' />

            <title>Au Register Forms by Colorlib</title>

            <link
              href='asset3/vendor/mdi-font/css/material-design-iconic-font.min.css'
              rel='stylesheet'
              media='all'
            />
            <link
              href='asset3/vendor/font-awesome-4.7/css/font-awesome.min.css'
              rel='stylesheet'
              media='all'
            />

            <link
              href='https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i'
              rel='stylesheet'
            />

            <link
              href='asset3/vendor/select2/select2.min.css'
              rel='stylesheet'
              media='all'
            />
            <link
              href='asset3/vendor/datepicker/daterangepicker.css'
              rel='stylesheet'
              media='all'
            />

            <link href='asset3/css/main.css' rel='stylesheet' media='all' />
          </head>

          <body>
            <div class='page-wrapper bg-red p-t-180 p-b-100 font-robo'>
              <div class='wrapper wrapper--w960'>
                <div class='card card-2'>
                  <div class='card-heading'></div>
                  <div class='card-body'>
                    <h2 class='title'>Login Page</h2>
                    <form method='POST'>
                      <div class='input-group'>
                        <input
                          class='input--style-2'
                          type='email'
                          value={this.state.email}
                          name='email'
                          placeholder='email'
                          onChange={this.handlechange}
                        />
                      </div>

                      <div class='row row-space'>
                        <div class='col-2'>
                          <div class='input-group'>
                            <input
                              class='input--style-2'
                              type='password'
                              value={this.state.password}
                              name='password'
                              placeholder='password'
                              onChange={this.handlechange}
                            />
                          </div>
                        </div>
                      </div>
                      <div class='p-t-30'>
                        <button
                          class='btn btn--radius btn--green'
                          type='button'
                          onClick={this.submithandler}
                        >
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <script src='asset3/vendor/jquery/jquery.min.js'></script>

            <script src='asset3/vendor/select2/select2.min.js'></script>
            <script src='asset3/vendor/datepicker/moment.min.js'></script>
            <script src='asset3/vendor/datepicker/daterangepicker.js'></script>

            <script src='asset3/js/global.js'></script>
          </body>
        </html>
        {this.state.loginstatus}
      </div>
    );
  }
}
export default App7;
