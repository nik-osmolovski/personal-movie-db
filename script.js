"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = prompt("Сколько фильмов вы уже посмотрели");

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = prompt("Сколько фильмов вы уже посмотрели");
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

// Добавление ответов от пользователя в объект movies
function addUserResponses() {
  for (let i = 0; i < 2; i++) {
    const watchMovies = prompt("Один из последних просмотренных фильмов?");
    const ratingMovies = prompt("На сколько оцените его?");

    if (watchMovies === null || watchMovies.trim() === '' || watchMovies.length > 50) {
      i--;
      continue
    };

    personalMovieDB.movies[watchMovies] = ratingMovies;
  };
}

// addUserResponses();

// Проверка свойства count на количество просмотренных фильмов
function checkNumberMovies() {
  if (personalMovieDB.count <= 10) {
    console.log("Просмотрено довольно мало фильмов");
  }
  else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
  }
  else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
  };
}

// checkNumberMovies();

// Запись номера любимого жанра
function writeYourGenres() {
  for (let i = 0; i < 3; i++) {
    const favoriteGenre = prompt(`Ваш любимый жанр под номером ${i + 1}`);

    if (favoriteGenre == '' || favoriteGenre == null) {
      i--;
      continue
    };

    personalMovieDB.genres.push(favoriteGenre);
  };
}

writeYourGenres();

// Показать базу данных в консоли
function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);