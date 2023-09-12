const router = require('express').Router();  
const { db } = require('../configuration/database')

router.post('/create', async (req, res) => { 
  const name = req.body.name
  const position = req.body.position
  const wage = req.body.wage
  const age = req.body.age
  const email = req.body.email

  const post = [name, position, wage, age, email]
  await db.query(
    "INSERT INTO staff1 (name, position, wage, age, email) VALUES (?,?,?,?,?)", 
      post, (err, result) => {
        if (err) {
          console.log(err)
        } else {
          res.send('Values Inserted')
        }
      
      })
  
 })


module.exports = router;