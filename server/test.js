// get dependencies
var app = require("express")();

const http = require('http')
const port = 5000
const bodyParser = require("body-parser");

/** bodyParser.urlencoded(options)
 * Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
 * and exposes the resulting object (containing the keys and values) on req.body
 */
app.use(bodyParser.urlencoded({
    extended: true
}));
app.listen(port);
var mysql = require('mysql');
 
console.log('Get connection ...');
 
var con = mysql.createConnection({
  database: 'SmartCrane',
  host: "localhost",
  user: "root",
  password: "12345"
});
 
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
app.use(bodyParser.json());

app.post("/", function (req, res) {
	var sql = "USE SmartCrane;";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("в бд SmartCrane");
  });
  var sql = "DELETE FROM Emergency;";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("чистим Emergency");
  });
    var sql = "DELETE FROM IOEvent;";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("чистим IOEvent");
  });
    var sql = "DELETE FROM CraneMove;";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("чистим CraneMove");
  });
  var sql = "DELETE FROM CarriageMove;";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("чистим CarriageMove");
  });
   var sql = "DELETE FROM LiftMove;";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("чистим LiftMove");
  });
    console.log(req.body);

    console.log("Таблица Emergency")
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
    
    var sql1 = "INSERT INTO Emergency (Id,CraneId,ConnectorId,TypeId,Time) VALUES ("+Id+", "+ConnectorId+", "+CraneId+","+ TypeId+","+ Time+");";
 		con.query(sql1, function (err, result) {
  		if (err) throw err;
  		console.log("Новая запись в Emergency");
});


    }


    console.log("Таблица IOEvent")
    for(var column_name in req.body.IOEvent){
      column = req.body.IOEvent[column_name]
      var Id = column.Id;
      var ConnectorId = column.ConnectorId;
      var CraneId = column.CraneId;
      var Time = "'"+column.Time+"'";
      var Value = column.Value;
      console.log("---------")
      console.log("Id: "+column.Id);
      console.log("ConnectorId: "+column.ConnectorId);
      console.log("CraneId: "+column.CraneId);
      console.log("Time: "+column.Time);
      console.log("Value: "+column.Value);
    
    var sql2 = "INSERT INTO IOEvent (Id,ConnectorId,CraneId,Time,Value) VALUES ("+Id+", "+ConnectorId+", "+CraneId+","+ Time+","+ Value+");";
    con.query(sql2, function (err, result) {
      if (err) throw err;
      console.log("Новая запись в IOEvent");
  });


    }


     console.log("Таблица CraneMove")
    for(var column_name in req.body.CraneMove){
      column = req.body.CraneMove[column_name]
      var Id = column.Id;
      var CraneId = column.CraneId;
      var MovementId = column.MovementId;
      var Time = "'"+column.Time+"'";
      var Speed = column.Speed;

      console.log("---------")
      console.log("Id: "+column.Id);
      console.log("CraneId: "+column.CraneId);
      console.log("MovementId: "+column.MovementId);
      console.log("Time: "+column.Time);
      console.log("Speed: "+column.Speed);
    
    var sql2 = "INSERT INTO CraneMove (Id,CraneId,MovementId,Time,Speed) VALUES ("+Id+", "+CraneId+", "+MovementId+","+ Time+","+ Speed+");";
    con.query(sql2, function (err, result) {
      if (err) throw err;
      console.log("Новая запись в CraneMove");
  });


    }    



      console.log("Таблица CarriageMove")
    for(var column_name in req.body.CarriageMove){
      column = req.body.CarriageMove[column_name]
      var Id = column.Id;
      var CraneId = column.CraneId;
      var CarriageId = column.CarriageId;
      var MovementId = column.MovementId;
      var Time = "'"+column.Time+"'";
      var Speed = column.Speed;

      console.log("---------")
      console.log("Id: "+column.Id);
      console.log("CraneId: "+column.CraneId);
      console.log("CarriageId: "+column.CarriageId);
      console.log("MovementId: "+column.MovementId);
      console.log("Time: "+column.Time);
      console.log("Speed: "+column.Speed);
    
    var sql2 = "INSERT INTO CarriageMove (Id,CraneId,CarriageId, MovementId,Time,Speed) VALUES ("+Id+", "+CraneId+","+CarriageId+","+MovementId+","+ Time+","+ Speed+");";
    con.query(sql2, function (err, result) {
      if (err) throw err;
      console.log("Новая запись в CarriageMove");
  });


    }

    console.log("Таблица LiftMove")
    for(var column_name in req.body.LiftMove){
      column = req.body.LiftMove[column_name]
      var Id = column.Id;
      var CraneId = column.CraneId;
      var LiftId = column.LiftId;
      var MovementId = column.MovementId;
      var Time = "'"+column.Time+"'";
      var Speed = column.Speed;
      var Mass = column.Mass;

      console.log("---------")
      console.log("Id: "+column.Id);
      console.log("CraneId: "+column.CraneId);
      console.log("LiftId: "+column.LiftId);
      console.log("MovementId: "+column.MovementId);
      console.log("Time: "+column.Time);
      console.log("Speed: "+column.Speed);
      console.log("Mass: "+column.Mass);
    
    
    var sql2 = "INSERT INTO LiftMove (Id,CraneId,LiftId, MovementId,Time,Speed,Mass) VALUES ("+Id+", "+CraneId+","+LiftId+","+MovementId+","+ Time+","+ Speed+","+Mass+");";
    con.query(sql2, function (err, result) {
      if (err) throw err;
      console.log("Новая запись в LiftMove");
  });


    }      

    res.send('POST request to the homepage');
});


