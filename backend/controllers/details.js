const router = require('express').Router(); 
const { db } = require('../configuration/database')

router.get("/details/:id", async (req, res) => {
    const postId = Number(req.params.id); //take /:id 
    await db.query("SELECT * FROM staff1 WHERE id = ?",
    postId, (err, result) => {
       if (err) {
         console.log(err)
       } else {
          res.send(result);
       }
     })
       
  })
 

  module.exports = router