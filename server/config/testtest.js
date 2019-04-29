var fs = require("fs");
var contents = fs.readFileSync("TRMZ_crane_2x2_Drives.json");
 var jsonContent = JSON.parse(contents);
 console.log(jsonContent);