"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели");

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

let watchMovies = prompt("Один из последних просмотренных фильмов?");
let ratingMovies = prompt("На сколько оцените его?");
let watchMoviesTwo = prompt("Один из последних просмотренных фильмов?");
let ratingMoviesTwo = prompt("На сколько оцените его?");

personalMovieDB.movies[watchMovies] = ratingMovies;
personalMovieDB.movies[watchMoviesTwo] = ratingMoviesTwo;
