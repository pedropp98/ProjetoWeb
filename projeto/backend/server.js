const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const AdminRoutes = require('./Routes/AdminRoutes')
const ClientRoutes = require('./Routes/ClientRoutes')
const OrderRoutes = require('./Routes/OrderRoutes')
const ProductRoutes = require('./Routes/ProductRoutes')

dotenv.config();

const app = express();
app.use(express.json());
app.use(AdminRoutes);
app.use(ClientRoutes);
app.use(OrderRoutes);
app.use(ProductRoutes);

const port = process.env.BACK_PORT || 3000;

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

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
