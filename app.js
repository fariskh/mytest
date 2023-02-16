const express = require('express');
const app     = express();
const PORT    = 3000;
db            = require('./db.js');

app.get('/select_all_employees', function(request, response) {
    db.mysql.select_all_employees(function(result) {
        response.send(result);
    });
});

app.get('/update_employee_name', function(request, response) {
    db.mysql.update_employee_name(request.query.id, request.query.name, function(result) {
        response.send("Successfully updated employee name");
    });
});

app.get('/delete_employee', function(request, response) {
    db.mysql.delete_employee(request.query.id, function(result) {
        response.send("Deleted employee "+ request.query.id);
    });
});

app.listen(PORT, function(error) {
    if(!error) {
        console.log("Server is Successfully Running, and App is listening on port "+ PORT);
    } else {
        console.log("Error occurred, server can't start", error);
    }
});
