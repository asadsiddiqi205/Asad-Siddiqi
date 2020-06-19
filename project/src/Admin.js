import React from "react";
import { withRouter, Link } from "react-router-dom";
import Header3 from "./Header3";
class Admin extends React.Component {
  constructor() {
    super();
    this.state = {
      itemss: [],
    };
    this.DeleteHandler = this.DeleteHandler.bind(this);
  }
  componentDidMount() {
    if (localStorage.getItem("type") !== "Admin") {
      this.props.history.push("/");
    } else {
      console.log(localStorage.getItem("type"));
      console.log(localStorage.getItem("tok"));
      fetch("http://localhost:5000/bringitemadmin")
        .then((res) => res.json())
        .then((res) => this.setState({ itemss: res }));
    }
  }
  DeleteHandler(id) {
    fetch("http://localhost:5000/deleteitem", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: id,
      }),
    }).then(window.location.reload());
  }

  render() {
    return (
      <div>
        <Header3></Header3>
        <div>
          <meta charSet='utf-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <title>Bootstrap Table with Add and Delete Row Feature</title>
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css?family=Roboto|Varela+Round|Open+Sans'
          />
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/icon?family=Material+Icons'
          />
          <link
            rel='stylesheet'
            href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
          />
          <link
            rel='stylesheet'
            href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'
          />
          <style
            type='text/css'
            dangerouslySetInnerHTML={{
              __html:
                "\n    body {\n        color: #404E67;\n        background: #F5F7FA;\n\t\tfont-family: 'Open Sans', sans-serif;\n\t}\n\t.table-wrapper {\n\t\twidth: 700px;\n\t\tmargin: 30px auto;\n        background: #fff;\n        padding: 20px;\t\n        box-shadow: 0 1px 1px rgba(0,0,0,.05);\n    }\n    .table-title {\n        padding-bottom: 10px;\n        margin: 0 0 10px;\n    }\n    .table-title h2 {\n        margin: 6px 0 0;\n        font-size: 22px;\n    }\n    .table-title .add-new {\n        float: right;\n\t\theight: 30px;\n\t\tfont-weight: bold;\n\t\tfont-size: 12px;\n\t\ttext-shadow: none;\n\t\tmin-width: 100px;\n\t\tborder-radius: 50px;\n\t\tline-height: 13px;\n    }\n\t.table-title .add-new i {\n\t\tmargin-right: 4px;\n\t}\n    table.table {\n        table-layout: fixed;\n    }\n    table.table tr th, table.table tr td {\n        border-color: #e9e9e9;\n    }\n    table.table th i {\n        font-size: 13px;\n        margin: 0 5px;\n        cursor: pointer;\n    }\n    table.table th:last-child {\n        width: 100px;\n    }\n    table.table td a {\n\t\tcursor: pointer;\n        display: inline-block;\n        margin: 0 5px;\n\t\tmin-width: 24px;\n    }    \n\ttable.table td a.add {\n        color: #27C46B;\n    }\n    table.table td a.edit {\n        color: #FFC107;\n    }\n    table.table td a.delete {\n        color: #E34724;\n    }\n    table.table td i {\n        font-size: 19px;\n    }\n\ttable.table td a.add i {\n        font-size: 24px;\n    \tmargin-right: -1px;\n        position: relative;\n        top: 3px;\n    }    \n    table.table .form-control {\n        height: 32px;\n        line-height: 32px;\n        box-shadow: none;\n        border-radius: 2px;\n    }\n\ttable.table .form-control.error {\n\t\tborder-color: #f50000;\n\t}\n\ttable.table td .add {\n\t\tdisplay: none;\n\t}\n",
            }}
          />
          <div className='container'>
            <div className='table-wrapper'>
              <div className='table-title'>
                <div className='row'>
                  <div className='col-sm-8'>
                    <h2>
                      Item<b>Details</b>
                    </h2>
                  </div>
                  <div className='col-sm-4'>
                    <Link to='/adminnew'>
                      <button type='button' className='btn btn-info add-new'>
                        <i className='fa fa-plus' /> Add New
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <table className='table table-bordered'>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.itemss.map((arr) => (
                    <tr>
                      <td>{arr.name}</td>
                      <td>{arr.descript}</td>
                      <td>{arr.price}</td>
                      <td>
                        <a className='add' title='Add' data-toggle='tooltip'>
                          <i className='material-icons'></i>
                        </a>
                        <a
                          className='edit'
                          title='Edit'
                          data-toggle='modal'
                          data-target='#addEmployeeModal'
                        >
                          <Link
                            to={{
                              pathname: "/adminedit",
                              state: {
                                name: arr.name,
                                descript: arr.descript,
                                id: arr.item_code,
                                price: arr.price,
                              },
                            }}
                          >
                            <i className='material-icons'></i>
                          </Link>
                        </a>
                        <a
                          className='delete'
                          title='Delete'
                          data-toggle='tooltip'
                        >
                          <i
                            className='material-icons'
                            onClick={() => this.DeleteHandler(arr.item_code)}
                          >
                            
                          </i>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Admin;
