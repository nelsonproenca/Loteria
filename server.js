const express = require('express'),
      path  = require('path'),
      bodyParser  = require('body-parser'),
      cors  = require('cors'),
      mongoose  = require('mongoose'),
      config  = require('./config/db');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(config.DB).then(
  () => { console.log('Database conectado.'); },
  (err) => { console.log(`Erro ao conectar. Erro: ${err}`) }
)

app.use(bodyParser.json());
app.use(cors());

var port = process.env.PORT || 4000;

const server = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})
