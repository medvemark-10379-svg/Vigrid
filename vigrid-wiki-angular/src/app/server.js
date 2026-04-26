const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const path = require('path');

const dbPath = path.join(__dirname, 'Vigrid_Database.db');

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) console.error('Hiba:', err.message);
  else console.log('Sikeres csatlakozás a fájlhoz:', dbPath);
});

const tables = ['bosses', 'characters', 'enemies', 'gods', 'cards', 'updates', 'requirements', 'runes', 'weapons'];

tables.forEach(table => {
  app.get(`/api/${table}`, (req, res) => {
    db.all(`SELECT * FROM ${table}`, [], (err, rows) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(rows);
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server fut: http://localhost:${PORT}`);
});