import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
      <div className="d-flex justify-content-between w-100">
        <Link className="navbar-brand mx-5" to="/">
          Mon Site
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/movies">
                List Movie
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/watchMovies">
                {" "}
                watch Movies{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/watchedMovies">
                {" "}
                watched Movies{" "}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
