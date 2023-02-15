import React from "react";
import { MovieCard, MovieCardWrapper } from "../../styles/styles.styled";

function MovieCards() {
  return (
    <MovieCardWrapper>
      <a href="#">
        <MovieCard className="movie-card"></MovieCard>
      </a>
      <h4>Lorem ipsum dolor sit </h4>
    </MovieCardWrapper>
  );
}

export default MovieCards;
