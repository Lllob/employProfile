import { useContext } from 'react';
import { PostContext } from '../../contexts/PostContext';

 import CatalogItem from "./CatalogItem/CatalogItem";
 //import Axios from "axios";

 const Catalog = () => { 
     let { posts } = useContext(PostContext);
    
    return (
        <section className="catalog">
        <h1>Ower catalog</h1>
      
        <ul className="posts">
           <div className="divH">
                <p className='nameH'>Name</p>
                <p className='positionH'>Position</p>
                <p className='wageH'>Wage</p>
                <p className='ageH'>Age</p>
                <p className='emailH'>Email</p>
            </div>
            {posts.length > 0 
                ? posts.map(post => <CatalogItem key={`${post.id}${5*6}`} post={post} />)
                : <p className="nopost">No post in data base!</p>
            }
        </ul>
        </section>
    );
};

export default Catalog;
