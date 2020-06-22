const express = require("express");
const router = express.Router();
const treeCtrl = require("../controllers/tree");
const auth = require("../middleware/auth");

router.get("/", treeCtrl.getAllTrees);
router.post("/set-random-trees", auth, treeCtrl.setRandomTrees);
router.post("/lock-tree/:treeId", auth, treeCtrl.lockTree);

// router.post("/update-one/:id/", auth, treeCtrl.updateOne);
router.post("/buy-one/:id/", auth, treeCtrl.buyOne);

module.exports = router;
