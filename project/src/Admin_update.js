import React from "react";
import { withRouter } from "react-router-dom";
import { wait } from "@testing-library/react";
import Header3 from "./Header3";
import Header2 from "./Header2";
class Admin_update extends React.Component {
  constructor(props) {
    super();
    this.state = {
      name: props.location.state.name,
      price: props.location.state.price,
      descript: props.location.state.descript,
      id: props.location.state.id,
    };
    this.handlechange = this.handlechange.bind(this);
    this.updatehandle = this.updatehandle.bind(this);
  }
  componentDidMount() {
    if (localStorage.getItem("type") !== "Admin") {
      this.props.history.push("/");
    }
  }
  handlechange(event) {
    const { name, value, checked, type } = event.target;
    event.target.type == "checkbox"
      ? this.setState({ [event.target.name]: event.target.checked })
      : this.setState({
          [event.target.name]: event.target.value,
        });
  }
  async updatehandle(event) {
    event.preventDefault();
    await fetch("http://localhost:5000/updateitem", {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: this.state.name,
        price: this.state.price,
        descript: this.state.descript,
        id: this.state.id,
      }),
    })
      .then(async (res) => await res.json())

      .then(
        setTimeout(() => {
          this.props.history.push("/admin");
        }, 2000)
      );
  }
  render() {
    return (
      <div>
        <Header3></Header3>
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link
          href='https://fonts.googleapis.com/css?family=Roboto:400,700'
          rel='stylesheet'
        />
        <title>Update form</title>
        <link
          rel='stylesheet'
          href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'
        />
        <link
          rel='stylesheet'
          href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css'
        />
        <style
          type='text/css'
          dangerouslySetInnerHTML={{
            __html:
              '\n\tbody{\n\t\tcolor: #fff;\n\t\tbackground: #63738a;\n\t\tfont-family: \'Roboto\', sans-serif;\n\t}\n    .form-control{\n\t\theight: 40px;\n\t\tbox-shadow: none;\n\t\tcolor: #969fa4;\n\t}\n\t.form-control:focus{\n\t\tborder-color: #5cb85c;\n\t}\n    .form-control, .btn{        \n        border-radius: 3px;\n    }\n\t.signup-form{\n\t\twidth: 400px;\n\t\tmargin: 0 auto;\n\t\tpadding: 30px 0;\n\t}\n\t.signup-form h2{\n\t\tcolor: #636363;\n        margin: 0 0 15px;\n\t\tposition: relative;\n\t\ttext-align: center;\n    }\n\t.signup-form h2:before, .signup-form h2:after{\n\t\tcontent: "";\n\t\theight: 2px;\n\t\twidth: 30%;\n\t\tbackground: #d4d4d4;\n\t\tposition: absolute;\n\t\ttop: 50%;\n\t\tz-index: 2;\n\t}\t\n\t.signup-form h2:before{\n\t\tleft: 0;\n\t}\n\t.signup-form h2:after{\n\t\tright: 0;\n\t}\n    .signup-form .hint-text{\n\t\tcolor: #999;\n\t\tmargin-bottom: 30px;\n\t\ttext-align: center;\n\t}\n    .signup-form form{\n\t\tcolor: #999;\n\t\tborder-radius: 3px;\n    \tmargin-bottom: 15px;\n        background: #f2f3f7;\n        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n        padding: 30px;\n    }\n\t.signup-form .form-group{\n\t\tmargin-bottom: 20px;\n\t}\n\t.signup-form input[type="checkbox"]{\n\t\tmargin-top: 3px;\n\t}\n\t.signup-form .btn{        \n        font-size: 16px;\n        font-weight: bold;\t\t\n\t\tmin-width: 140px;\n        outline: none !important;\n    }\n\t.signup-form .row div:first-child{\n\t\tpadding-right: 10px;\n\t}\n\t.signup-form .row div:last-child{\n\t\tpadding-left: 10px;\n\t}    \t\n    .signup-form a{\n\t\tcolor: #fff;\n\t\ttext-decoration: underline;\n\t}\n    .signup-form a:hover{\n\t\ttext-decoration: none;\n\t}\n\t.signup-form form a{\n\t\tcolor: #5cb85c;\n\t\ttext-decoration: none;\n\t}\t\n\t.signup-form form a:hover{\n\t\ttext-decoration: underline;\n\t}  \n',
          }}
        />
        <div className='signup-form'>
          <form
            action='/examples/actions/confirmation.php'
            method='post'
            onSubmit={this.updatehandle}
          >
            <h2>Update</h2>
            <p className='hint-text'>Update item</p>
            <div className='form-group'>
              <input
                type='text'
                className='form-control'
                name='name'
                defaultValue={this.state.name}
                onChange={this.handlechange}
                required='required'
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                className='form-control'
                name='descript'
                defaultValue={this.state.descript}
                onChange={this.handlechange}
                required='required'
              />
            </div>
            <div className='form-group'>
              <input
                type='number'
                className='form-control'
                name='price'
                defaultValue={this.state.price}
                onChange={this.handlechange}
                required='required'
              />
            </div>

            <div className='form-group'>
              <button
                type='submit'
                className='btn btn-success btn-lg btn-block'
                onSubmit={this.updatehandle}
              >
                Update Now
              </button>
            </div>
          </form>
        </div>
        {this.state.name}
      </div>
    );
  }
}
export default withRouter(Admin_update);
