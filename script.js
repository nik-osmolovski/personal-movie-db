"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  toggleVisibleMyDB() {
    this.privat = !this.privat;
  },
  start() {
    this.count = prompt("Сколько фильмов вы уже посмотрели");

    while (this.count == '' || this.count == null || isNaN(this.count)) {
      this.count = prompt("Сколько фильмов вы уже посмотрели");
    }
  },
  addUserResponses() {
    for (let i = 0; i < 2; i++) {
      const watchMovies = prompt("Один из последних просмотренных фильмов?");
      const ratingMovies = prompt("На сколько оцените его?");

      if (watchMovies === null || watchMovies.trim() === '' || watchMovies.length > 50) {
        i--;
        continue
      };

      this.movies[watchMovies] = ratingMovies;
    };
  },
  checkNumberMovies() {
    if (this.count <= 10) {
      console.log("Просмотрено довольно мало фильмов");
    }
    else if (this.count > 10 && this.count < 30) {
      console.log("Вы классический зритель");
    }
    else if (this.count >= 30) {
      console.log("Вы киноман");
    };
  },
  writeYourGenres() {
    for (let i = 0; i < 3; i++) {
      const favoriteGenre = prompt(`Ваш любимый жанр под номером ${i + 1}`);

      if (favoriteGenre == '' || favoriteGenre == null) {
        i--;
        continue
      };

      this.genres.push(favoriteGenre);
    };

    this.genres.forEach((genre, index) => {
      console.log(`Любимый жанр ${index + 1} - это ${genre}`);
    })
  },
  showMyDB() {
    if (!this.privat) {
      console.log(this);
    }
  }
};