import React from "react";
import "./MovieStatStripe.css";

const MovieStatStripe = ({ movie }) => {
  const runtime = `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}min`;

  // budget (number -> comma-separated string preceded by $ sign)
  let budget = [];
  if (movie.budget > 0) {
    budget[0] = movie.budget.toString();
    while (budget[0].length > 3) {
      budget.push(budget[0].slice(budget[0].length - 3));
      budget[0] = budget[0].slice(0, budget[0].length - 3);
    }
    budget = "$" + budget.join(",");
  } else {
    budget = "no info";
  }

  return (
    <ul className="movie-details-stat-stripe">
      <li className="movie-details-stat-stripe-item">
        <i className="far fa-clock" />
        <span>runtime: </span>
        <span>{runtime}</span>
      </li>

      <li className="movie-details-stat-stripe-item">
        <i className="far fa-money-bill-alt" />
        <span>budget: </span>
        <span>{budget}</span>
      </li>

      {/* <li className="movie-details-stat-stripe-item">
        <i className="far fa-money-bill-alt" />
        <span>runtime: </span>
        <span>2h 33min</span>
      </li> */}
    </ul>
  );
};

export default MovieStatStripe;
