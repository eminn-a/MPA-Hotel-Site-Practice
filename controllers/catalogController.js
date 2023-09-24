const { getAll, getById } = require("../services/accoService");
const router = require("express").Router();

router.get("/", (req, res) => {
  const rooms = getAll;
  console.log(rooms);
  res.render("catalog", {
    title: "Catalog",
    rooms,
  });
});

router.get("/:id", (req, res) => {
  const roomId = req.params.id;
  const room = getById(roomId);
  console.log(room);

  if (room) {
    res.render("details", {
      title: "Details",
      room,
    });
  } else {
    res.render("roomNotFound", {
      title: "Not Found!",
      roomId,
    });
  }
});

module.exports = router;
