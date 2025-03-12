import sqlite3 from "sqlite3";
const sql3 = sqlite3.verbose();
import path from "path";
const dbPath = path.resolve("./app/config/mydata.db");

const DB = new sql3.Database(dbPath, sqlite3.OPEN_READWRITE, connected);

function connected(err) {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log("We are connected through db and sqlLite DB does already exist");
}

let sql = `
CREATE TABLE IF NOT EXISTS tutorials (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title varchar(255) NOT NULL,
  description varchar(255),
  published BOOLEAN DEFAULT false
)`;

DB.run(sql, [], (err) => {
  if (err) {
    console.log("error creating tutorials table");
    return;
  }
  console.log("Created Table");
});

export { DB };
