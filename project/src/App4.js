import React from "react";
import Header2 from "./Header2.js";
import { Link, withRouter } from "react-router-dom";
class App4 extends React.Component {
  constructor() {
    super();
    this.state = {
      itemss: [],
    };
    this.OnAddtoCart = this.OnAddtoCart.bind(this);
  }
  componentDidMount() {
    if (localStorage.getItem("type") === "customer") {
      console.log(localStorage.getItem("type"));
      console.log(localStorage.getItem("tok"));
      fetch("http://localhost:5000/bringitem")
        .then((res) => res.json())
        .then((res) => this.setState({ itemss: res }));
    } else {
      this.props.history.push("/");
    }
  }
  async OnAddtoCart(name, item_code, price, description) {
    await fetch("http://localhost:5000/insertcart", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        email: localStorage.getItem("email"),
        item_code: item_code,
        price: price,
        description: description,
      }),
    });
  }

  render() {
    return (
      <div>
        <Header2></Header2>
        <meta charSet='utf-8' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
        <meta name='description' content />
        <meta name='author' content />
        <title>Shop Homepage -Your Daily Food Partner!</title>
        {/* Bootstrap core CSS */}
        <link
          href='menu/vendor/bootstrap/css/bootstrap.min.css'
          rel='stylesheet'
        />
        {/* Custom styles for this template */}
        <link href='menu/css/shop-homepage.css' rel='stylesheet' />
        {/* Navigation */}

        {/* Page Content */}
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3'>
              <h1 className='my-4'>EatNow!</h1>
              <div className='list-group'>
                <a href='#' className='list-group-item'>
                  Italian
                </a>
                <a href='#' className='list-group-item'>
                  Desi-Food
                </a>
                <a href='#' className='list-group-item'>
                  Chinese
                </a>
              </div>
            </div>
            {/* /.col-lg-3 */}
            <div className='col-lg-9'>
              <div
                id='carouselExampleIndicators'
                className='carousel slide my-4'
                data-ride='carousel'
              >
                <ol className='carousel-indicators'>
                  <li
                    data-target='#carouselExampleIndicators'
                    data-slide-to={0}
                    className='active'
                  />
                  <li
                    data-target='#carouselExampleIndicators'
                    data-slide-to={1}
                  />
                  <li
                    data-target='#carouselExampleIndicators'
                    data-slide-to={2}
                  />
                </ol>
                <div className='carousel-inner' role='listbox'>
                  <div className='carousel-item active'>
                    <img
                      className='d-block img-fluid'
                      src='menu/eatnowlogo.jpg'
                    />
                  </div>
                  <div className='carousel-item'>
                    <img
                      className='d-block img-fluid'
                      src='http://placehold.it/900x350'
                      alt='Second slide'
                    />
                  </div>
                  <div className='carousel-item'>
                    <img
                      className='d-block img-fluid'
                      src='http://placehold.it/900x350'
                      alt='Third slide'
                    />
                  </div>
                </div>
                <a
                  className='carousel-control-prev'
                  href='#carouselExampleIndicators'
                  role='button'
                  data-slide='prev'
                >
                  <span
                    className='carousel-control-prev-icon'
                    aria-hidden='true'
                  />
                  <span className='sr-only'>Previous</span>
                </a>
                <a
                  className='carousel-control-next'
                  href='#carouselExampleIndicators'
                  role='button'
                  data-slide='next'
                >
                  <span
                    className='carousel-control-next-icon'
                    aria-hidden='true'
                  />
                  <span className='sr-only'>Next</span>
                </a>
              </div>
              <div className='row'>
                {this.state.itemss.map((arr) => (
                  <div className='col-lg-4 col-md-6 mb-4' key={arr.item_code}>
                    <div className='card h-100'>
                      <a href='#'>
                        <img className='card-img-top' src='menu/biryani.jpg' />
                      </a>
                      <div className='card-body'>
                        <h4 className='card-title'>
                          <a href='#'>{arr.name}</a>
                        </h4>
                        <h5>{arr.price}</h5>
                        <p className='card-text'>{arr.descript}</p>
                      </div>
                      <div className='card-footer'>
                        <small className='text-muted'>★ ★ ★ ★ ☆</small>
                        <button
                          onClick={(even) =>
                            this.OnAddtoCart(
                              arr.name,
                              arr.item_code,
                              arr.price,
                              arr.descript
                            )
                          }
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* /.row */}
            </div>
            {/* /.col-lg-9 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
        {/* Footer */}

        <footer className='py-5 bg-dark'>
          <div className='container'>
            <p className='m-0 text-center text-white'>Happy Shopping!</p>
          </div>
          {/* /.container */}
        </footer>
        {/* Bootstrap core JavaScript */}
      </div>
    );
  }
}

export default withRouter(App4);
