import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { PostContext } from "../../../contexts/PostContext";
import Axios from "axios";

const CatalogItem = ({ post }) => { //props
  const [click, setClick] = useState(false)
  const { postRemove } = useContext(PostContext);

  const onClick = () => {
    if (click === false) {
      setClick(true)
    } else {
      setClick(false)
    }
  }

  const postDeleteHandler = (e) => {
      e.preventDefault()
    const confirmation = window.confirm('Are you sure you want to delete this post?');
    if (confirmation) {
      Axios.get(`http://localhost:5000/delete/${post.id}`)
      .then((result) => {
        postRemove(post.id)
     })
    }
  }


  return(
      <li className="post" onClick={onClick}>   
           <p className='name'>{post.name}</p>
            <p className='position'>{post.position}</p>
            <p className='wage'>{post.wage}</p>
            <p className='age'>{post.age}</p>
            <p className='email'>{post.email}</p>
            {click &&
            <div className="btnDiv">
              <Link type='submit' className="detailsBtn" to={`/edit/${post.id}`}>Edit</Link>
               <button className="btn" onClick={postDeleteHandler}>Delete</button>
            </div>
            }
      </li>
     
    )
  }

  export default CatalogItem
