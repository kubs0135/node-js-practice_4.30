const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ data: "Hello World" });
});

router.post("/", (req, res) => {
  res.json({ data: "Hello post" });
});

router.patch("/", (req, res) => {
  res.json({ data: "Hello PATCH" });
});

router.put("/", (req, res) => {
  res.json({ data: "Hello put" });
});

router.delete("/", (req, res) => {
  res.json({ data: "Hello DELETE" });
});

module.exports = router;
