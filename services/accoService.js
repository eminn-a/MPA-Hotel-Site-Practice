const fs = require("fs");

const fileName = "./models/data.json";
const data = JSON.parse(fs.readFileSync(fileName));

async function presist() {
  return new Promise((res, rej) => {
    fs.writeFile(fileName, JSON.stringify(data), (err) => {
      if (err == null) {
        res();
      } else {
        rej(err);
      }
    });
  });
}

function getAll() {
  return data;
}

function getById(id) {
  return data.find((x) => x.id == id);
}

module.exports = {
  getAll,
  getById,
};