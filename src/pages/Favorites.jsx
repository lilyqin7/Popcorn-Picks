import "../css/Favorites.css"
import MovieCard from "../components/MovieCard"
import {useMovieContext} from "../contexts/MovieContext"

function Favorites() {
    const {favorites} = useMovieContext();
    if (favorites) {
        return (
            <div className="favorites">
                <h2>Your Favorites</h2>
                <div className="favorites-grid">
                    {favorites.map((movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
            </div>
        )
    }

    return <div className="favorites-empty">
        <h2>No Favorite Movies Yet</h2>
        <p>Start adding movies to your favorites and they will appear here</p>
    </div>
}

export default Favorites;