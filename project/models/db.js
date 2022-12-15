const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/EmployeeDB',(err) => {
    if(!err) {console.log('DataBase connected.');}
    else {console.log('Error in DataBase: ' + err);}
})

require('./employee.model');