'use strict';

const numberOfFilms = +prompt('How many movies have you already watched?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


// My version (BASED) (SOLVED drawback: prompt b could be skipped, but now it is fixed)
for (let i = 0; i < 2; i++) {
    let a = prompt('Name the movie you have watched recently', '');
    if (a != null && a != '' && a.length <= 50) {
        let b = +prompt('How would you rate it?', '');
        if (b != null && b != '' && b <= 10 && b >= 0) {
            personalMovieDB.movies[a] = b;
        } 
        while (b == null || b == '' || b > 10 || b < 0) {
            let b = +prompt('How would you rate it?', '');
            if (b != null && b != '' && b <= 10 && b >= 0) {
                personalMovieDB.movies[a] = b;
                break;
            }
        }
    } else {
        i--;
    }
}

// Author's version (drawback: in case of unacceptable answer/skip to prompt a the script does not repeat 
// the prompt until the fulfilling response, as in my version,
// but shows prompt b, after which the user will be shown that unfulfilled prompt a again)

// for (let i = 0; i < 2; i++) {
//     const a = prompt('Name the movie you have watched recently', ''),
//           b = prompt('How would you rate it?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// }



if (personalMovieDB.count <= 10) {
    prompt('Few movies watched');
} else if (personalMovieDB.count <= 30) {
    prompt('You are an ordinary viewer');
} else if (personalMovieDB.count > 30) {
    prompt('You are a cinephile');
} else {
    prompt('Error');
}

console.log(personalMovieDB);
