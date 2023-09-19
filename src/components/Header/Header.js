import { Link, useNavigate } from 'react-router-dom';
import { useState, useContext } from "react";
import { SearchContext } from '../../contexts/SearchContext';


 const Header = () => {
  const [input, setInput] = useState('')
  const { setSearchPost } = useContext(SearchContext)
  const navigate = useNavigate()

    const onChange = (e) => {
      e.preventDefault(e)
        setInput(e.target.value)
    }

    const onSubmit = (e) => {
      e.preventDefault()
      setSearchPost(input)
      e.target.reset() 
      navigate('/search')
    }

  return (
    <header className="header">
    <nav className="nav">
       <div className='divNav'>
         <Link className="linkH" to="/">Home</Link>
          <Link className="linkH" to="/catalog">All staff</Link>
          <Link className="linkH" to="/create">Add new worker</Link>
        </div>
          <form onSubmit={onSubmit} className="searchForm">
              <input onChange={onChange} type="text" name="search" placeholder="Search here..." />
              <button type='submit' className='detailsBtn'>Search</button>
          </form>
    </nav>
  </header>
  )

}

export default Header


