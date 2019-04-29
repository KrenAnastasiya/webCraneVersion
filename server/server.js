const http = require('http')
const port = 5000
const requestHandler = (request, response) => {
	var mysql = require('mysql');
	var con = mysql.createConnection({
		host: "localhost",
  		user: "root",
  		password: "12345"
	});


var app = require("express")();

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.post("/", function (req, res) {
    console.log(req.body);

    console.log("Таблица Emergency");
    for(var column_name in req.body.Emergency){
    	column = req.body.Emergency[column_name]
    	var Id = column.Id;
    	var ConnectorId = column.ConnectorId;
    	var CraneId = column.CraneId;
    	var TypeId = column.TypeId;
    	var Time = "'"+column.Time+"'";
    	console.log("---------")
    	console.log("Id: "+column.Id);
    	console.log("ConnectorId: "+column.ConnectorId);
    	console.log("CraneId: "+column.CraneId);
    	console.log("TypeId: "+column.TypeId);
    	console.log("Time: "+column.Time);
    
    //var sql1 = "INSERT INTO Emergency (Id,CraneId,ConnectorId,TypeId,Time) VALUES ("+Id+", "+ConnectorId+", "+CraneId+","+ TypeId+","+ Time+");";
 	//	con.query(sql1, function (err, result) {
  	//	if (err) throw err;
  	//	console.log("Новая запись в Emergency");
//  });


    }

    res.send('POST request to the homepage');
});

}