var projectData=[];
var path = require('path')
const express = require('express')
const app = express()
/* Dependencies */ // body-parser, cors
const bodyParser = require('body-parser')
const cors = require('cors');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
app.use(cors());
app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
   res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})
// Callback function to complete GET '/all'
app.get('/all', sendData);
function sendData (request, response) {
    response.send(projectData);
  };

// Post Route
app.post('/all', addinfo);

function addinfo(req,res){
    newEntry=
        {  city: req.body.city,
           countryCode: req.body.countryCode,
           temperture  : req.body.tempretur,
           description: req.body.description
        }
    projectData.push(newEntry);
   console.log(projectData);

};

