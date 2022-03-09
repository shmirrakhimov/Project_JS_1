'use strict';

const numberOfFilms = +prompt('How many movies have you already watched?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Name the movie you have watched recently', ''),
      b = prompt('How would you rate it?', ''),
      c = prompt('Name the movie you have watched recently', ''),
      d = prompt('How would you rate it?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
