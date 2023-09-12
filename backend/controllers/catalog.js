const router = require('express').Router(); 
const { db } = require('../configuration/database')


router.get("/catalog", async (req, res) => {
      await db.query("SELECT * FROM staff1", (err, result) => {
      if (err) {
        console.log(err)
      } else {
        res.send(result)
      }
   })
 })

module.exports = router;