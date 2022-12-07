let express = require("express");
let bodyParser = require("body-parser");

let server = express();
let jsonParser = bodyParser.json();

server.use(express.static(__dirname));
server.use(jsonParser);

server.get("/", function (request, response) {
    console.log("Start page requested.");
    response.send("<h1>Welcome to Node Package Manager Server!</h1>");
});

server.get("/userGet", function (request, response) {
    console.log(request.query);
    console.log(request.query.Surname += ": ValidatedByGET");
    console.log(request.query.Name += ": ValidatedByGET");
    console.log(request.query.Age += ": ValidatedByGET");
    console.log(request.query.Residence += ": ValidatedByGET");
    response.send("Ajax GET method is completed successfully: " + JSON.stringify(request.query));
});

server.post("/userPost", function (request, response) {
    let obj = request.body;
    console.log(obj);
    console.log(obj.userSurname += ": ValidatedByPOST");
    console.log(obj.userName += ": ValidatedByPOST");
    console.log(obj.userAge += ": ValidatedByPOST");
    console.log(obj.userResidence += ": ValidatedByPOST");
    response.send("Ajax POST method is completed successfully: " + JSON.stringify(obj));
});

server.listen(3000);