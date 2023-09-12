import { Link } from 'react-router-dom';

const Header = () => {
  return(
    <header className="header">
    <nav className="nav">
         <Link className="linkH" to="/">Home</Link>
          <Link className="linkH" to="/catalog">All staff</Link>
          <Link className="linkH" to="/create">Add new worker</Link>
          <Link className="linkH" to="/search">Search</Link>
    </nav>
  </header>
  )
}

export default Header;