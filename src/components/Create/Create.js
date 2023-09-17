import { useContext, useState } from 'react';
import { PostContext } from '../../contexts/PostContext';
 import { Link, useNavigate } from 'react-router-dom';
import Axios from "axios";

const Create = () => {
    const { postCreate } = useContext(PostContext);
     const navigate = useNavigate()
    
    const [name, setName] = useState('')
  const [position, setPosition] = useState('')
  const [wage, setWage] = useState(0)
  const [age, setAge] = useState(0)
  const [email, setEmail] = useState('')

  
  
  const onCreate = (e) => {
    e.preventDefault()
    if (name === '' || position === '' || wage === 0 || age === 0 || email === ''){
      return alert ('Please fill all fields')
   }

    const data = { name: name, position: position, wage: wage, age: age, email: email  }
    Axios.post('http://localhost:5000/create', (data))
    .then((result) => {
       console.log("succsess")
       postCreate(data)
       navigate('/catalog')
   })
  }


return(
  <div className="create">
      <form action="post" className="info" onSubmit={onCreate}>
      <div>
        <label htmlFor="name">Name: </label>
        <input name="name" type="text" required 
        minLength="2" onChange={(e) => setName(e.target.value)} 
        />
      </div>
      <div>
        <label htmlFor="position">Position: </label>
        <input name="position" type="text" required 
        minLength="2" onChange={(e) => setPosition(e.target.value)} 
        />
      </div>
      <div>
        <label htmlFor="wage">Wage: </label>
        <input name="wage" type="number" required onChange={(e) => setWage(e.target.value)} />
      </div>
      <div>
        <label htmlFor="age">Age: </label>
        <input name="age" type="number" required 
        min='18' max='65' onChange={(e) => setAge(e.target.value)} 
        />
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input name="email" type="email" required
        pattern="([a-zA-Z]+)@([a-zA-Z]+)\.([a-zA-Z]+)$"
         onChange={(e) => setEmail(e.target.value)} 
         />

      </div>

      <button className="btn" type='submit'>Save</button>
      </form>
      <div className="allStaffDiv">
        <div className="horizontal"></div>
          <Link type='submit' className="allStaffBtn" to={`/catalog`}>Show all staff</Link>   
          
        </div>
    </div>
  )
};

export default Create;
