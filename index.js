var http = require("http");
//TODO - Use Employee Module here
var employees = require("./Employee");
console.log("Lab 03 -  NodeJs");

//TODO - Fix any errors you found working with lab exercise

//Define Server Port
const PORT = 8000;

//Create Web Server using CORE API
var server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else {
        if (req.url === '/') {
            //TODO - Display message "<h1>Welcome to Lab Exercise 03</h1>"
            res.end("<h1>Welcome to Lab Exercise 03</h1>");
        }

        else if (req.url === '/employee') {
            //TODO - Display all details for employees in JSON format
            res.end(JSON.stringify(employees));
        }

        else if (req.url === '/employee/names') {
            //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
            //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]
            let arr = [];
            for (let employee of employees.employees) {
                arr.push(`${employee.firstName} ${employee.lastName}`);
            }
            arr.sort();
            res.end(JSON.stringify(arr));
        }

        else if (req.url === '/employee/totalsalary') {
            //TODO - Display Sum of all employees salary in given JSON format 
            //e.g. { "total_salary" : 100 }
            let sum = 0;
            for (let employee of employees.employees) {
                sum += employee.Salary;
            }
            let totalSal = {
                total_salary: sum
            };
            res.end(JSON.stringify(totalSal));
        }
        else {
            res.end(`{"error": "${http.STATUS_CODES[404]}"}`)
        }    
    }
}).listen(PORT);