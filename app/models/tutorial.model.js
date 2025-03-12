import { DB } from "../config/db.config.js";
const Tutorial = function (tutorial) {
  this.title = tutorial.title;
  this.description = tutorial.description;
  this.published = tutorial.published;
};
Tutorial.create = (newTutorial, result) => {
  let sqlQuery = `Insert into tutorials (title,description,published) Values(?,?,?)`;
  DB.run(
    sqlQuery,
    [newTutorial.title, newTutorial.description, newTutorial.published],
    function (err) {
      if (err) {
        return result(err, null);
      }
      console.log(newTutorial);

      result(null, { id: this.lastID, ...newTutorial });
    }
  );
};

Tutorial.findAll = (result) => {
  let sqlQuery = `Select * from tutorials`;
  DB.all(sqlQuery, [], function (err, data) {
    if (err) {
      return result(err, null);
    }
    return result(null, data);
  });
};

Tutorial.getAllPublished = (result) => {
  let sqlQuery = `SELECT * FROM tutorials WHERE published = true`;
  DB.all(sqlQuery, [], function (err, data) {
    if (err) {
      return result(err, null);
    }
    console.log(data);

    return result(null, data);
  });
};

Tutorial.findById = (id, result) => {
  let sqlQuery = `SELECT * FROM tutorials WHERE id = ?`;

  DB.get(sqlQuery, [id], (err, row) => {
    if (err) {
      return result(err, null);
    }

    if (!row) {
      return result(null, { result: "Id not found" });
    }

    result(null, row);
  });
};

Tutorial.updateById = (id, newTutorial, result) => {
  let sqlQuery = `UPDATE tutorials SET title = ?, description = ?, published = ? WHERE id = ?`;
  DB.run(
    sqlQuery,
    [newTutorial.title, newTutorial.description, newTutorial.published, id],
    function (err) {
      if (err) {
        return result(err, null);
      }
      if (this.changes === 0) {
        return result(null, { message: "No record found with this id " });
      }

      result(null, { id: this.lastID, ...newTutorial });
    }
  );
};

Tutorial.removeById = (id, result) => {
  let sqlQuery = `DELETE FROM tutorials WHERE id = ?`;
  DB.run(sqlQuery, [id], function (err) {
    if (err) {
      return result(err, null);
    }
    if (this.changes === 0) {
      return result(null, { message: "No record found with this id" });
    }
    console.log("hello");
    result(null, id);
  });
};

Tutorial.removeAll = (result) => {
  let sqlQuery = `DELETE FROM tutorials`;
  DB.run(sqlQuery, (err, res) => {
    if (err) {
      return result(err, null);
    }
    result(null, res);
  });
};

export { Tutorial };
