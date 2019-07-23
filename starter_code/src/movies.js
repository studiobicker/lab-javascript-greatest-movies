/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
const ratesAverage = aMovieArray => {
  if (aMovieArray.length) {
    const rates = aMovieArray.reduce((sum,movie) => {
      return sum + (parseFloat(movie.rate) || 0 );
    },0) 
    return Math.round((rates / aMovieArray.length)*100)/100;
  } else {
    return 0;
  }
}

// Iteration 2: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = aMovieArray => {
  const dramaMovies = aMovieArray.filter(movie => {
    return movie.genre.indexOf('Drama') > -1;
  })

  return ratesAverage(dramaMovies);
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

const orderByDuration = aMovieArray => {

  const cloneMovieArray = [...aMovieArray];

  let moviesByDuration = cloneMovieArray.sort((a, b) => {   

    return a.duration - b.duration || a.title - b.title;
  })
   return moviesByDuration
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
const howManyMovies = aMovieArray => {
  const spielbergMovies = aMovieArray.filter(movie => {
    return movie.genre.indexOf('Drama') > -1 && movie.director === 'Steven Spielberg';
  }) 
  return spielbergMovies.length;
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = aMovieArray => {
  const cloneMovieArray = [...aMovieArray];

  const sortedMovieArray = cloneMovieArray.sort((a,b) =>{
      if (a.title < b.title){
        return -1;
    }
    if (a.title > b.title){
        return 1;
    }
    return 0;
  }) 
  //return sortedMovieArray.slice(0,20);
  const sortedMovieTitleArray = [];
  for (let i=0; i<sortedMovieArray.length && i<20; i++) {
    sortedMovieTitleArray.push(sortedMovieArray[i].title);
  }
  return sortedMovieTitleArray;
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
const convertHoursToMinutes = duration => {
  const time = duration.split('h');

  if (time.length > 1){
    return time[0] * 60 + (parseFloat(time[1]) || 0);
  } else {
    return parseFloat(time[0]) || 0;
  }

}
const turnHoursToMinutes = aMovieArray => {
  changedMovieArray = aMovieArray.map(movie => {
    let movieCopy = {...movie}
    movieCopy.duration = convertHoursToMinutes(movieCopy.duration);
    return movieCopy;
  })
  return changedMovieArray;
}

console.log('Iteration 1: average rate' ,ratesAverage(movies));
console.log('Iteration 2: average rate of drama movies',dramaMoviesRate(movies));
console.log("Iteration 3: Order by duration", orderByDuration(turnHoursToMinutes(movies)));
console.log('Iteration 4: Drama movies by Spielberg', howManyMovies(movies));
console.log('Iteration 5: Order by title and print first 20', orderAlphabetically(movies));
console.log('Iteration 6: movie duration in minutes', turnHoursToMinutes(movies));

console.log('Check original array',movies);



// BONUS Iteration: Best yearly rate average - Best yearly rate average
