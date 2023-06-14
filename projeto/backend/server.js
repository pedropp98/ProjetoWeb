const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
//const cors = require('cors');
//const path = require('path');
//const router = express.Router();
const bodyParser = require('body-parser');

dotenv.config();

// Schemas
const adminRoute = require('./Routes/AdminRoutes');
// require('./models/productModel');
// require('./models/orderModel');

const app = express();
const port = process.env.BACK_PORT || 3000;

//const routes = require('./routes');

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;

const url = `mongodb+srv://${dbUser}:${dbPassword}@${dbName}.cewcget.mongodb.net/?retryWrites=true&w=majority`;

console.log(`Database user info: ${dbUser} : ${dbPassword}`);

// Connecting to database (mongoDB)
try {
    mongoose.connect(url, { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}
catch (err) {
    console.log(`Error when connectiong to MongoBD! ${err}`);
    return;
}

// var corsOptions = {
//     origin: process.env.FRONTEND_URL,
//     credentials: true
// }

//app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.use(cors(corsOptions)); // Cross-Origin Resource Sharing
app.use(express.json()); // used to parse JSON bodies
app.use('/', adminRoute);

//console.log(path.join(__dirname, 'build'));

//app.use(routes);
//app.use(express.static(path.join(__dirname, 'build'))); // static route if no route was found in 'routes.js' -> files from React

//console.log(`dir: ${__dirname}`);

// const Schema = mongoose.Schema;

// var admin = new Schema({
//     nome:{
//        type : String,
//        required : false
//     }
//  });

// const Admin = mongoose.model('Admin', admin);

// app.get('/', (req, res, next) => {
//     console.log(`Requisicao: ${req.body}`);

//     Admin.find()
//     .then((products) => {
//        console.log(`Resposta: ${products}`);
//        res.status(200).send(products);
//     })
//     .catch((error) => {
//        console.log(`Busca por ${Admin} nao funcionou: ${error}`);
//     });
// });

const httpServer = app.listen(port, () => {
    console.log(`== Server listening on port ${port} ==`);
    
    //Attempt to avoid leaving zombie processes using port
    process.on('beforeExit', () => httpServer.close());
});

const axios = require('axios');

axios.get('http://localhost:3000/')
  .then(response => {
    const data = response.data;
    console.log('Dados da resposta:', data);
    // Faça algo com os dados
  })
  .catch(error => {
    console.log('Erro na requisição:', error);
    // Lide com o erro da requisição
  });

