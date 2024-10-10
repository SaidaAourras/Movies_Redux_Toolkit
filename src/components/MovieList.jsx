import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../redux/MovieReducer';
import SingleMovie from './SingleMovie';
import { IoIosStarOutline } from "react-icons/io";
import './MovieList.css'

const MovieList = () => {
    const dispatch = useDispatch();
    const { movies, statut, erreur } = useSelector((state) => state.movies);
    const categories = Array.from(new Set(movies.map(m => m.category)))
 

    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch]);

    if (statut === 'loading') {
        return <div>Loading...</div>;
    }

    if (statut === 'failed') {
        return <div>Error: {erreur}</div>;
    }

    return (
        <div className="d-flex justify-content-around">
            <div>
                <div className='radios w-25 mx-auto'>
                    {
                        categories.map((cat,index) => (
                            <div key={index} className="form-check">
                                <input className="form-check-input" type="radio" name="category"  />
                                <label className="form-check-label" >
                                    {cat}
                                </label>
                            </div>
                        ))
                    }

                </div>
                <div className='rating'>
                    <button><IoIosStarOutline /></button>
                    <button><IoIosStarOutline /></button>
                    <button><IoIosStarOutline /></button>
                    <button><IoIosStarOutline /></button>
                    <button><IoIosStarOutline /></button>
                </div>
            </div>
            <div className="d-flex flex-wrap justify-content-around w-75 mx-auto">
                {movies.map((movie) => (
                    <SingleMovie key={movie.id} movie={movie} />
                ))}
            </div>
        </div>

    );
};

export default MovieList;
