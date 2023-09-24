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

async function create(roomData) {
  const room = {
    id: getId(),
    name: roomData.name,
    description: roomData.description,
    price: Number(roomData.price),
    imgUrl: roomData.imgUrl,
  };
  console.log(roomData);
  data.push(room);
  await presist();
  return room;
}

function getId() {
  return ("00000" + ((Math.random() * 999999) | 0).toString(16)).slice(-6);
}

module.exports = {
  getAll,
  getById,
  create,
};
