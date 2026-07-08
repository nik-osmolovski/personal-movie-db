"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели");

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};


// Добавление ответов от пользователя в объект movies
for (let i = 0; i < 2; i++) {
  const watchMovies = prompt("Один из последних просмотренных фильмов?");
  const ratingMovies = prompt("На сколько оцените его?");

  if (watchMovies === null || watchMovies.trim() === '' || watchMovies.length > 50) {
    i--;
    continue
  };

  personalMovieDB.movies[watchMovies] = ratingMovies;
};


// Проверка свойства count на количество просмотренных фильмов
if (personalMovieDB.count < 10) {
  console.log("Просмотрено довольно мало фильмов");
}
else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
  console.log("Вы классический зритель");
}
else if (personalMovieDB.count > 30) {
  console.log("Вы киноман");
};