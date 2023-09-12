import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from 'react-router-dom'; //useNavigate
import { Link } from 'react-router-dom';
import Axios from "axios";

 import { PostContext } from '../../contexts/PostContext';

 const Edit = () => {
    const [post, setDetailsStaff] = useState('')
    const { postEdit, postDetails } = useContext(PostContext)
    const navigate = useNavigate();

  const ID = useParams();
  const postId = ID.id

  useEffect(() => {
    Axios.get(`http://localhost:5000/details/${postId}`)
    .then((result) => {
         setDetailsStaff(result.data[0])
         postDetails(result.data[0], Number(postId))
   })
   // eslint-disable-next-line 
}, [postId])

  const onEdit = (e) => {
    e.preventDefault()
    const editData = Object.fromEntries(new FormData(e.target));
    const data = {
        name: editData.name, position: editData.position, wage: editData.wage, age: editData.age, email: editData.email 
    }

    Axios.put(`http://localhost:5000/edit/${postId}`, data)
    .then((result) => {
     console.log("succsess")
     postEdit(data, postId)
     navigate('/catalog');
   })
  }


return(
    <div className="create">
      <form action="post" className="info" onSubmit={onEdit}>
      <div>
        <label htmlFor="name">Name: </label>
        <input name="name" type="text" defaultValue={post.name} />
      </div>
      <div>
        <label htmlFor="position">Position: </label>
        <input name="position" type="text" defaultValue={post.position} />
      </div>
      <div>
        <label htmlFor="wage">Wage: </label>
        <input name="wage" type="number"  defaultValue={post.wage} />
      </div>
      <div>
        <label htmlFor="age">Age: </label>
        <input name="age" type="number" defaultValue={post.age} />
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input name="email" type="text"  defaultValue={post.email} />
      </div>

      <button className="btn" type='submit'>Save</button>
      </form>
      <div className="allStaffDiv">
        <div className="horizontal"></div>
          <Link type='submit' className="allStaffBtn" to={`/catalog`}>Show all staff</Link>   
          
        </div>
    </div>
)
}

export default Edit;