const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    session = require('express-session'),
    massive = require('massive');
const ctrlUsers = require('./controllers/controllerUsers');
const ctrlProperties = require('./controllers/controllerProperties');
const isLoggedIn = require('./middlewares/isLoggedIn');
require('dotenv').config();

const app = express();
app.use(express.static(__dirname + '/client/build'));
app.use(bodyParser.json());

// app.use(cors({
//   origin: 'http://localhost:3000',
//   credentials: true
// }));

app.use(
  session({
      secret: 'whatever',
      resave: true,
      saveUnititialized: false,
      cookie: {
        maxAge: 30 * 24 * 60 * 60 * 1000
      }
    })
  );


// ===== Database Connection ============

massive(process.env.CONNECTION_STRING)
  .then(db => {
      app.set('db', db);
    })
  .catch(error => console.log(error));




// ===== EndPoints ============


// Auth Endpoints
app.get('/api/auth/login/:username/:password', ctrlUsers.login);
app.post('/api/auth/register', ctrlUsers.register);


app.get('/api/user/:userId', ctrlUsers.getUserProfile)
app.get('/api/user/homes/:userId', ctrlUsers.getUserHomes)
app.put('/api/user/update/:userId', isLoggedIn, ctrlUsers.updateUser)

app.get('/api/home', ctrlProperties.getPropertyHome)
app.get('/api/search/:query', ctrlProperties.getPropertySearch)
app.get('/api/property/:propertyId', ctrlProperties.getProperty)
app.post('/api/add', isLoggedIn, ctrlProperties.addProperty)
app.put('/api/property/:propertyId/update', isLoggedIn, ctrlProperties.updateProperty)
app.delete('/api/delete/:propertyId', isLoggedIn, ctrlProperties.deleteProperty)

app.put('/api/property/book/:propertyId',isLoggedIn , ctrlProperties.book)



// ===== Listen ===============
app.listen(process.env.PORT || 3001, () => {
   console.log('I like to listen. I have learned a great deal from listening carefully. Most people never listen. Im listening on port: ', process.env.PORT || 3001);
 })
