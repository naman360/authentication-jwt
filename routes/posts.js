const router = require("express").Router();
const auth = require("../utility/verifyToken");
router.get("/posts", auth, (req, res) => {
  res.send({ id: 1, post: "Private data you shouldn't access" });
});
module.exports = router;
