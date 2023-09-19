import { useContext,  useState, useEffect } from "react";
import { PostContext } from '../../contexts/PostContext';
import { SearchContext } from "../../contexts/SearchContext";

import SearchItem from "./SearchItem/SearchItem";

const Search = () => {
  const [sort, setSort] = useState('')
  const [searchAll, setSearchAll] = useState('')
const { posts } = useContext(PostContext)
const { searchPost } = useContext(SearchContext)

 useEffect(() => {
    const sortedPosts = posts.filter(p => p.name.includes(searchPost))
    setSearchAll(sortedPosts)
  }, [posts, searchPost])

  ////////

      const onSort = (e) => {
        e.preventDefault()
      let sortPosts = searchAll.sort((a, b) => a.name.localeCompare(b.name))
      setSort(sortPosts)
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
          {searchAll.length > 0 &&
              <div>
                  {sort !== ''
                     ? sort.map(post => <SearchItem key={`${post.id}${5*6}`} post={post} />)
                     : searchAll.map(post => <SearchItem key={`${post.id}${5*6}`} post={post} />)
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

export default Search;

// style={{ background: "red"}}
