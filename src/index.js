
const path = require('path');
const exphbs = require('express-handlebars');
const express = require('express');
const app = express();

//bbdd
//const { mongoose } = require('./database');




// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  //helpers: require('./helpers'),
  extname: '.hbs'
}));
app.set('view engine', '.hbs');


//middlewares
app.use(express.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'views')));

//importing routes
const indexRoutes = require('./routes/index');



//routes
app.use('/', indexRoutes);


// server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});