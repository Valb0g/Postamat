const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

let db = require('./fakedb/fakedb');
const PORT = 3001;
const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//отдает все посылки
app.get('/package', (req, res) => {

  res.json(db);
});

//Добавляет новую посылочку в базу и возвращает созданный объект с id
app.post('/package', (req, res) => {
  const newPackage = { id: uuidv4(), ...req.body};
  db = [...db, newPackage]
  console.log(db);
  res.json(newPackage);
})

//Удаляет из базы одну посылку по id
app.delete('/package/:id', (req, res) => {
  const { id } = req.params;
  db = db.filter( el => el.id !== id);
  res.sendStatus(200);
})

app.listen(PORT);
