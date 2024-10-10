import Rating from "./Rating"


const SingleMovie = (Props) => {
    const { movie } = Props
    return (
        <div className="card my-3 " style={{ width: '18rem' }}>
            <img src={movie.poster} className="card-img-top" alt={movie.title} />
            <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <div className="d-flex justify-content-between my-2">
                    <Rating rating={movie.rating} />
                </div>
                <div className=" text-muted"> {movie.category}</div>
                <button className="btn btn-outline-info btn-sm mx-1" >
                    Add to Watch
                </button>
                <button className="btn btn-outline-warning  btn-sm mx-1">watched</button>
            </div>
        </div>
    )
}

export default SingleMovie
