const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const AdminRoutes = require('./Routes/AdminRoutes');
const ClientRoutes = require('./Routes/ClientRoutes');
const OrderRoutes = require('./Routes/OrderRoutes');
const ProductRoutes = require('./Routes/ProductRoutes');
const LoginRoutes = require('./Routes/LoginRoutes');
const LogoutRoutes = require('./Routes/LogoutRoutes');
const UserRoutes = require('./Routes/UserRoutes');
const session = require('express-session');
const MongoStore = require('connect-mongo');
//const Startup = require('./MiddleWare/Startup')
//const passport = require('passport');
//const cookieParser = require("cookie-parser");


const cors = require('cors')

const uuid = require('uuid').v4
const FileStore = require('session-file-store')(session)

dotenv.config();

const port = process.env.BACK_PORT || 3000;

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;

const url = `mongodb+srv://${dbUser}:${dbPassword}@${dbName}.ps3ecct.mongodb.net/?retryWrites=true&w=majority`;

const app = express();
app.use(cors({
  origin: '*'
}));

app.use(express.json());
app.use(AdminRoutes);
app.use(ClientRoutes);
app.use(OrderRoutes);
app.use(ProductRoutes);
app.use(LoginRoutes);
//app.use(cookieParser());
app.use(
  session({
    genid:(req) => {
      return uuid()
    },
    store: MongoStore.create(
      {
        mongoUrl : url
      }),
    secret: 'HulkDeCalcinha',
    resave : false,
    saveUninitialized : true,
    cookie : {
      maxAge : 1200000 // 20 minutos
      //maxAge :15
    }
  })
);

app.use('/login', LoginRoutes);
app.use('/logout', LogoutRoutes);
app.use('/user', UserRoutes);

//app.use(passport.initialize());
//app.use(passport.session());


console.log(`Database user info: ${dbUser} : ${dbPassword}`);

// Connecting to database (mongoDB)
try {
  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  //Startup(router);

  //app.use('/', )

  console.log('Connected to MongoDB!');
}
catch (err) {
  console.log(`Error when connectiong to MongoBD! ${err}`);
  return;
}

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
