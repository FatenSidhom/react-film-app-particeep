import React from "react";
import { useDispatch } from "react-redux";
import { deleteMovie } from "../../store/reducers/movie/movieSlice";
import Gauge from "./Jauge";
import IconToggle from "./IconToggle";
import "./MovieItem.css";

function MovieItem({ movie }) {
	const dispatch = useDispatch();

	return (
		<div className="card ">
			<div className="card-body">
			<img src={movie.img} alt="film pic" />
				<h6 className="font-weight-bold">{movie.title}</h6>
				<p>categorie: {movie.category}</p>
				<Gauge movie={movie} />
				<IconToggle liked={movie.liked} id={movie.id} />
				<button
					class="btn btn-danger btn-sm"

					onClick={() => dispatch(deleteMovie(movie.id))}
				>
					supprimer
				</button>
				
			</div>
		</div>
	);
}

export default MovieItem;
