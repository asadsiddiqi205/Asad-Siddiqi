import React from "react";

class App2 extends React.Component {
  constructor() {
    super();
    this.state = {
      itemss: []
    };
  }
  async componentDidMount() {
    await fetch("http://localhost:4000/bringitem")
      .then(res => res.json())
      .then(res => this.setState({ itemss: res }));
  }

  render() {
    return (
      <div>
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
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark fixed-top'>
          <div className='container'>
            <a className='navbar-brand' href='#'>
              Your Favourite Food Partner!
            </a>
            <button
              className='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#navbarResponsive'
              aria-controls='navbarResponsive'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon' />
            </button>
            <div className='collapse navbar-collapse' id='navbarResponsive'>
              <ul className='navbar-nav ml-auto'>
                <li className='nav-item active'>
                  <a className='nav-link' href='#'>
                    Home
                    <span className='sr-only'>(current)</span>
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    About
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    Services
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
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
                {this.state.itemss.map(arr => (
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

export default App2;