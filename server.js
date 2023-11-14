// server.js

// Import required modules
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const path = require('path');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('./config/connection');

// Create Express.js app
const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ /* Add any necessary configurations */ });

// Set up session middleware
const sess = {
  secret: 'your_secret_key',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize, // Pass the Sequelize instance
  }),
};

app.use(session(sess));

// Inform Express.js to use Handlebars as the template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Middleware to parse incoming JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Import routes
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Use the imported routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Sync Sequelize models to the database and start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});
