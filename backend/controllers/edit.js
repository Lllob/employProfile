const router = require('express').Router(); 
const { db } = require('../configuration/database')


router.put('/edit/:id', async (req, res) => { 
    const postId = req.params.id; //take /:id 

    const name = req.body.name
    const position = req.body.position
    const wage = req.body.wage
    const age = req.body.age
    const email = req.body.email

    const data = [name, position, wage, age, email, Number(postId)]
   
    let logic = 'UPDATE staff1 SET name = ?, position = ?, wage = ?, age = ?, email = ? WHERE id = ?'
     await db.query(logic, data, (err, result) => {
      if (err) {
        console.log(err)
      } else {
        res.send(result)
      }
    })
   
})

module.exports = router;