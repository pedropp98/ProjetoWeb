const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
//const cors = require('cors');
//const path = require('path');
//const router = express.Router();
const bodyParser = require('body-parser');
const Admin = require('./Models/AdminModel');

const adminController = require('./Controller/AdminController');

dotenv.config();

// Schemas
const adminRoute = require('./Routes/AdminRoutes');
// require('./models/productModel');
// require('./models/orderModel');

const app = express();
app.use(express.json());

const port = process.env.BACK_PORT || 3000;



//const routes = require('./routes');

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;

const url = `mongodb+srv://${dbUser}:${dbPassword}@${dbName}.cewcget.mongodb.net/Administrator?retryWrites=true&w=majority`;

console.log(`Database user info: ${dbUser} : ${dbPassword}`);

// Connecting to database (mongoDB)
try {
  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log('Connected to MongoDB!');
}
catch (err) {
  console.log(`Error when connectiong to MongoBD! ${err}`);
  return;
}

app.get('/admin', adminController.get);

app.post('/admin', (req, res) => {
  console.log(`Requisicao: ${req.body}`);

  const admin = new Admin({
    nome: req.body.nome,
  });

  admin.save()
    .then((response) => {
      console.log(`Resposta: ${response}`);
      res.json(response).status(200);
    })
    .catch((error) => {
      console.log(`Busca por ${Admin} nao funcionou: ${error}`);
    });
});

// var corsOptions = {
//     origin: process.env.FRONTEND_URL,
//     credentials: true
// }

//app.use(bodyParser.urlencoded({ extended: false }));

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

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});