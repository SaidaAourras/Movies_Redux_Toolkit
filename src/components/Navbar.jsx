
import { Link } from 'react-router-dom';


const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Mon Site</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/movies">List Movie</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/watchMovies"> watch Movies </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/watchedMovies"> watched Movies </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
