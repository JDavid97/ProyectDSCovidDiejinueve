const express = require('express')
//const router = express.Router();
const app = express();

//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(express.json());

//static files
app.use(express.static(__dirname + '/public') )

//Routes

app.listen(app.get('port'), ()=>{
    console.log('Running on http://localhost:'+app.get('port'))
})