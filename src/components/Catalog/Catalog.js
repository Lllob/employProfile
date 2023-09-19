import { useContext, useState, useEffect } from 'react';
import Axios from "axios";
import { PostContext } from '../../contexts/PostContext';

 import CatalogItem from "./CatalogItem/CatalogItem";
 
 const Catalog = () => { 
     const [posts, setPosts] = useState('')
     const [sort, setSort] = useState('')
     const { postCatalog } = useContext(PostContext);

     useEffect(() => {
        Axios.get('http://localhost:5000/catalog')
        .then((result) => {
               setPosts(result.data)
               postCatalog(result.data) 
            })
    }, [postCatalog, posts])

    const onSort = (e) => {
        //e.preventDefault()
      let sortPosts = posts.sort((a, b) => a.name.localeCompare(b.name))
      setSort(sortPosts)
      postCatalog(sortPosts)
    }

    return (
        <section className="catalog">
        <h1>Ower catalog</h1>
      
        <ul className="posts">
            <button className="sort" onClick={onSort} type='submit'>Sort</button>
           <div className="divH">
                <p className='nameH'>Name</p>
                <p className='positionH'>Position</p>
                <p className='wageH'>Wage</p>
                <p className='ageH'>Age</p>
                <p className='emailH'>Email</p>
            </div>
            {posts.length > 0 &&
                <div>
                    {sort !== ''
                       ? sort.map(post => <CatalogItem key={`${post.id}${5*6}`} post={post} />)
                       : posts.map(post => <CatalogItem key={`${post.id}${5*6}`} post={post} />)
                    }
                  </div>   
             }

          {posts.length <= 0 &&
            <p className="nopost">No post in data base!</p>
          }
        </ul>
        </section>
    );
};

export default Catalog;
