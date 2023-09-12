const router = require('express').Router(); 
const { db } = require('../configuration/database')


router.get('/delete/:id', async (req, res) => { 
    const postId = req.params.id; 

    await db.query("DELETE FROM staff1 WHERE id= ?", postId, (err, result) => {
        if (err) {
          console.log(err)
        } else {
          res.send(result)
        }
     })
   
})

module.exports = router;