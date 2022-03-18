'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('How many movies have you already watched?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How many movies have you already watched?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Name the movie you have watched recently', '');
            if (a != null && a != '' && a.length <= 50) {
                let b = +prompt('How would you rate it?', '');
                if (b != null && b != '' && b <= 10 && b >= 0 || !isNaN(b)) {
                    personalMovieDB.movies[a] = b;
                }
                while (b == null || b == '' || b > 10 || b < 0 || isNaN(b)) {
                    let b = +prompt('How would you rate it?', '');
                    if (b != null && b != '' && b <= 10 && b >= 0 && !isNaN(b)) {
                        personalMovieDB.movies[a] = b;
                        break;
                    }
                }
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count <= 10) {
            prompt('Few movies watched');
        } else if (personalMovieDB.count <= 30) {
            prompt('You are an ordinary viewer');
        } else if (personalMovieDB.count > 30) {
            prompt('You are a cinephile');
        } else {
            prompt('Error');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    /* toggleVisibleMyDB: function(hidden) {
        hidden ? hidden = false : hidden = true;
    }, */
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        // for (let i = 1; i < 4; i++) {
        //     let genre = prompt(`Your favorite genre number ${i}`);

        //     if (genre === null || genre === '') {
        //         console.log('Incorrect answer or no at all');
        //         i--;
        //     } else {
        //         personalMovieDB.genres[i-1] = genre;
        //     }
        // }
        for (let i = 1; i < 2; i++) {
            let genres = prompt(`Input your favorite genres using comma`).toLocaleLowerCase();

            if (genres === null || genres === '') {
                console.log('Incorrect answer or no at all');
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            }
        }
        

        personalMovieDB.genres.forEach((item, i) => { 
            console.log(`Favorite genre number ${i + 1} is ${item}`);
        });
    }
};

