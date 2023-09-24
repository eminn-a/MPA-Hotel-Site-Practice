const { create } = require("../services/accoService");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("create", {
    title: "Create",
  });
});

router.post("/", async (req, res) => {
  try {
    const reuslt = await create(req.body);
    res.redirect("/catalog/" + reuslt.id);
  } catch (err) {
    res.render("create", {
      title: "Request Error",
    });
  }
});

module.exports = router;
