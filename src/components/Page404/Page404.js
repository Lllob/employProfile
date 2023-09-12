import { Link } from 'react-router-dom';

const Page404 = () => {
return (
<section className="errorPage">
  <div className="err-container">
    <h1>404</h1>
    <h2>Page Not Found</h2>
    <p>
      The Page you are looking for doesn't exist or another error occurred. Go
      to{'  '}
      <Link type="button" to="/" className="btn">
        Home page
      </Link>
    </p>
  </div>
</section>
)
}

export default Page404;