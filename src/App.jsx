import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './components/MovieList';
import Navbar from './components/Navbar';
import WatchList from './components/WatchList';
import WatchedList from './components/WatchedList';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {


  return (
    <>
    <Router>
        <Navbar/>
        <Routes>
        <Route path="/movies" element={<MovieList />} />
          <Route path="/watchMovies" element={<WatchList />} />
          <Route path="/watchedMovies" element={<WatchedList />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
