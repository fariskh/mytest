const mysql = require('mysql');

function connectToDatabase() {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '#MysqlPassw0rd',
    database: 'mytest'
  });

  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL database: ' + err.stack);
      return false;
    }
    console.log('Connected to MySQL database with connection ID ' + connection.threadId);
  });

  return connection;
}

exports.mysql = {
    select_all_employees : function (callback) {
      connection = connectToDatabase();
      connection.query("SELECT * FROM employees", function (err, result, fields) {
        if (err) throw err;
        callback(result);
      });
    },
    update_employee_name : function (id, name, callback) {
      connection = connectToDatabase();
      connection.query("UPDATE employees SET name = ? WHERE id = ?", [name, id], function (err, result, fields) {
        if (err) throw err;
        callback(result);
      });
    },
  delete_employee : function (id, callback) {
    connection = connectToDatabase();
    connection.query("DELETE FROM employees WHERE id = ? ", [id], function (err, result, fields) {
      if (err) throw err;
      callback(result);
    });
  }
}


