const express = require('express');
const router = express.Router();
const userModel = require('./user-model');


router.post('/register', async (req, res) => {
  const user = req.body;
  try {
    const userResp = await userModel.create(user);
    res.json(userResp);
  } catch(e) {
    res.send(e.message)
  }
});

module.exports = router;