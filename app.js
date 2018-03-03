const express = require('express');
const app = express();
const path = require('path');
const expressHandlebars = require('express-handlebars');


app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', expressHandlebars({defaultLayout: 'home'}));
app.set('view engine', 'handlebars');

const main = require('./routes/home/main');
const admin = require('./routes/admin/admin');
app.use('/', main);
app.use('/admin', admin);
app.listen(9999, (err=>{
  console.log('server is running');
}));
