// содежимое index.js
const http = require('http')
const port = 8080
const requestHandler = (request, response) => {
	var mysql = require('mysql');
	var con = mysql.createConnection({
		host: "localhost",
  		user: "root",
  		password: "12345"
	});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

 var config = require('./test.json');
   
  
  var sql = "USE SmartCrane;";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });

    console.log("Таблица Emergency")
    for(var column_name in config.Emergency){
    	column = config.Emergency[column_name]
    	var Id = column.Id;
    	var ConnectorId = column.ConnectorId;
    	var CraneId = column.CraneId;
    	var TypeId = column.TypeId;
    	var Time = column.Time;
    	console.log("---------")
    	console.log("Id: "+column.Id);
    	console.log("ConnectorId: "+column.ConnectorId);
    	console.log("CraneId: "+column.CraneId);
    	console.log("TypeId: "+column.TypeId);
    	console.log("Time: "+column.Time);
    	console.log("INSERT INTO Emergency (Id,CraneId,ConnectorId,TypeId,Time) VALUES ("+Id+", "+ConnectorId+", "+CraneId+","+ TypeId+","+ Time+");");

  	//var sql1 = "INSERT INTO Emergency (Id,CraneId,ConnectorId,TypeId,Time) VALUES ("+Id+", "+ConnectorId+", "+CraneId+","+ TypeId+","+ Time+");";
 	//	con.query(sql1, function (err, result) {
    //		if (err) throw err;
    //		console.log("2 record inserted");
  //});


    }



});
  
}

const server = http.createServer(requestHandler)
server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})