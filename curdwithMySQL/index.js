const mysql = require("mysql");
const cors = require("cors");
const jwt = require("jsonwebtoken");
var mysqlconnec = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "password",
  database: "a",
  multipleStatements: true,
});
const express = require("express");
const app = express();
const bodypar = require("body-parser");
app.use(cors());
app.use(bodypar.json());
mysqlconnec.connect((err) => {
  if (!err) {
    console.log("connected successfully");
  } else {
    console.log("errorr" + JSON.stringify(err, undefined, 2));
  }
});
app.listen(5000, () => {
  console.log("express server is running !!!11");
});

app.post("/signup", cors(), (req, res) => {
  let emp = req.body;
  var sql = "INSERT INTO user VALUES(?,?,?,?);";
  mysqlconnec.query(
    sql,
    [emp.fullname, emp.email, emp.password, 1],
    (err, row, fields) => {
      if (!err) {
        console.log(row);
      } else {
        console.log(err);
      }
    }
  );
});
app.get("/bringitem", cors(), (req, res) => {
  var sql = "SELECT * FROM items;";
  mysqlconnec.query(sql, (err, row, fields) => {
    if (!err) {
      res.json(row);
    } else {
      console.log(err);
    }
  });
});
app.get("/bringitemadmin", cors(), (req, res) => {
  var sql = "SELECT * FROM items;";
  mysqlconnec.query(sql, (err, row, fields) => {
    if (!err) {
      res.json(row);
    } else {
      console.log(err);
    }
  });
});
app.post("/insert", cors(), (req, res) => {
  let emp = req.body;
  var sql = "INSERT INTO items(name,price,descript) VALUES(?,?,?);";
  mysqlconnec.query(
    sql,
    [emp.name, emp.price, emp.descript],
    (err, row, fields) => {
      if (!err) {
        console.log(emp.descript);
        console.log(row);
      } else {
        console.log(err);
      }
    }
  );
});
app.post("/getcart", cors(), (req, res) => {
  let emp = req.body;
  var sql = "SELECT * FROM cart where email=?";
  mysqlconnec.query(sql, [emp.email], (err, row, fields) => {
    if (!err) {
      console.log(row);
      res.send(row);
    } else {
      console.log(err);
    }
  });
});
app.post("/insertcart", cors(), (req, res) => {
  let emp = req.body;
  var sql = "INSERT INTO cart VALUES(?,?,?,?,?);";
  mysqlconnec.query(
    sql,
    [emp.email, emp.item_code, emp.name, emp.price, emp.description],
    (err, row, fields) => {
      if (!err) {
        console.log(row);
      } else {
        console.log(err);
      }
    }
  );
});
app.delete("/deleteitem", cors(), (req, res) => {
  let emp = req.body;
  var sql = "DELETE FROM items where item_code=?;";
  mysqlconnec.query(sql, [emp.id], (err, row, fields) => {
    if (!err) {
      console.log(row);
    } else {
      console.log(err);
    }
  });
});
app.put("/updateitem", cors(), (req, res) => {
  let emp = req.body;
  var sql =
    "UPDATE items SET name=case when ? <> ''  then ? else name end,price=case when ? <> '' then ? else price end,descript=case when ? <> '' then ? else descript end where item_code=?;";
  mysqlconnec.query(
    sql,
    [
      emp.name,
      emp.name,
      emp.price,
      emp.price,
      emp.descript,
      emp.descript,
      emp.id,
    ],
    (err, row, fields) => {
      if (!err) {
        console.log(row);
        res.send("hello");
      } else {
        console.log(err);
      }
    }
  );
});

app.post("/loginauth", (req, res) => {
  let emp = req.body;
  mysqlconnec.query(
    "SELECT * FROM user WHERE email=? AND passwords=?",
    [emp.email, emp.password],
    (err, row, fields) => {
      if (row.length > 0) {
        if (row[0].usertypeid == 1) {
          console.log(row);
          const user = {
            email: emp.email,
            name: row[0].fullname,
          };
          jwt.sign({ user }, "secretkey", (err, token) => {
            console.log(token);
            var status1 = "customer";
            console.log(status1);
            res.json({ token, status1 });
          });
        } else if (row[0].usertypeid == 2) {
          console.log(row);
          const user = {
            email: emp.email,
            name: row[0].fullname,
          };
          jwt.sign({ user }, "adminkey", (err, token) => {
            var status1 = "Admin";
            res.json({ token, status1 });
          });
        }
      } else {
        console.log(emp.email);
        console.log(emp.password);
        var status1 = "false";
        res.json(status1);
      }
    }
  );
});
