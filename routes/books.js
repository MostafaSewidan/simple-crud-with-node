

const express = require("express");
const router = express.Router();
const {index,store,update,destroy} = require("../controllers/book.controller");
const {auth} = require("../middleware/authMiddleware");


router.get("/",auth, index);
router.post("/",auth, store);
router.put("/:bookId",auth, update);
router.delete("/:bookId",auth, destroy);

module.exports = router;