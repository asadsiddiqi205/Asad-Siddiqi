import React from "react";
import Header2 from "./Header2";
class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      itemss: [],
    };
  }
  async componentDidMount() {
    if (localStorage.getItem("type") !== "customer") {
      console.log("hello");
      this.props.history.push("/");
    } else {
      console.log("hell");
      await fetch("http://localhost:5000/getcart", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: localStorage.getItem("email"),
        }),
      })
        .then((res) => res.json())
        .then((res) => this.setState({ itemss: res }));
    }
  }
  render() {
    return (
      <div>
        <Header2></Header2>
        <meta charSet='utf-8' />
        <title>Bootdey.com</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link
          href='http://netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css'
          rel='stylesheet'
        />
        <style
          type='text/css'
          dangerouslySetInnerHTML={{
            __html:
              "\n    \t.img-cart {\n    display: block,\n    max-width: 50px,\n    height: auto,\n    margin-left: auto;\n    margin-right: auto\n}\ntable tr td{\n    border:1px solid #FFFFFF;    \n}\n\ntable tr th {\n    background:#eee;    \n}\n\n.panel-shadow {\n    box-shadow: { rgba(0, 0, 0, 0.3) 7px 7px 7px;\n}\n    ",
          }}
        />
        <link
          rel='stylesheet'
          type='text/css'
          href='//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css'
        />
        <div className='container bootstrap snippet'>
          <div className='col-md-9 col-sm-8 content'>
            <div className='row'>
              <div className='col-md-12'>
                <ol className='breadcrumb'></ol>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-12'>
                <div className='panel panel-info panel-shadow'>
                  <div className='panel-heading'>
                    <h3>
                      <img
                        className='img-circle img-thumbnail'
                        src='https://bootdey.com/img/Content/user_3.jpg'
                      />
                      Matew darfkmoun
                    </h3>
                  </div>
                  <div className='panel-body'>
                    <div className='table-responsive'>
                      <table className='table'>
                        <thead>
                          <tr>
                            <th>item code</th>
                            <th>name</th>
                            <th>description</th>
                            <th>price</th>
                            <th>Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          {this.state.itemss.map((arr) => (
                            <tr>
                              <td>
                                <strong>{arr.item_code}</strong>
                              </td>
                              <td>
                                <p>{arr.name}</p>
                              </td>
                              <td>{arr.description}</td>
                              <td>{arr.price}</td>
                              <td></td>
                            </tr>
                          ))}

                          <tr>
                            <td colSpan={6}>&nbsp;</td>
                          </tr>
                          <tr>
                            <td colSpan={4} className='text-right'>
                              Total Product
                            </td>
                            <td>Rs.150.00</td>
                          </tr>
                          <tr>
                            <td colSpan={4} className='text-right'>
                              Total Shipping
                            </td>
                            <td>Rs.50.00</td>
                          </tr>
                          <tr>
                            <td colSpan={4} className='text-right'>
                              <strong>Total</strong>
                            </td>
                            <td>Rs.200.00</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <a href='#' className='btn btn-success'>
                  <span className='glyphicon glyphicon-arrow-left' />
                  &nbsp;Continue Shopping
                </a>
                <a href='#' className='btn btn-primary pull-right'>
                  Next
                  <span className='glyphicon glyphicon-chevron-right' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Cart;
