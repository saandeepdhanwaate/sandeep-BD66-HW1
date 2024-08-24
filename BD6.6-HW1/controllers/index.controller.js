let movies = [
  {
    movieId: 1,
    title: "Inception",
    genre: "Sci-Fi",
    director: "Christopher Nolan",
  },
  {
    movieId: 2,
    title: "The Shawshank Redemption",
    genre: "Drama",
    director: "Frank Darabont",
  },
  {
    movieId: 3,
    title: "The Godfather",
    genre: "Crime",
    director: "Francis Ford Coppola",
  },
];

// Exercise 1: Retrieve All Movies 🟢

function getAllMovies() {
  return movies;
}

//  Exercise 2: Retrieve Movie by ID  🟢

function getMoveById(id) {
  return movies.find((movie) => movie.movieId === id);
}

module.exports = { getAllMovies, getMoveById };
