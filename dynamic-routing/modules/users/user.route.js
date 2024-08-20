//manage

const router = require("express").Router();

//read all data
router.get("/", (req, res) => {
  //query
  res.json({ data: "Hello from users" });
});

//read one data
router.get("/:id", (req, res) => {
  //params
  res.json({ data: `get data from user id ${req?.params?.id}` });
});

//create
router.post("/", (req, res) => {
  //body
  res.json({ data: "Hello from post users" });
});

//update
router.put("/:id", (req, res) => {
  //params+body
  res.json({ data: "Hello from put users" });
});

//update
router.patch("/:id", (req, res) => {
  //params+body
  res.json({ data: "Hello from patch users" });
});

router.delete("/:id", (req, res) => {
  //params
  res.json({ data: "Hello from delete users" });
});

module.exports = router;
