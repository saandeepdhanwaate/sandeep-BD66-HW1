const request = require("supertest");
const { app } = require("../index.js");
const {
  getAllMovies,
  getMoveById,
} = require("../controllers/index.controller.js");

const http = require("http");
const { describe, beforeEach } = require("node:test");

jest.mock("../controllers/index.controller.js", () => ({
  ...jest.requireActual("../controllers/index.controller.js"),
  getAllMovies: jest.fn(),
  getMoveById: jest.fn(),
}));

let server;

beforeAll((done) => {
  server = http.createServer(app);
  server.listen(3001, done);
});

afterAll((done) => {
  server.close(done);
});

describe("API endpoint test", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // Exercise 3: Test Retrieve All Movies
  it("should return all movies with status 200", async () => {
    let mockMovie = [
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

    getAllMovies.mockReturnValue(mockMovie);
    let result = await request(server).get("/movies");
    expect(result.status).toBe(200);
    expect(result.body.movies).toEqual(mockMovie);
  });

  // Exercise 4: Test Retrieve Movie by ID

  it("should return movies by Id with status 200", async () => {
    let mockMovie = {
      movieId: 1,
      title: "Inception",
      genre: "Sci-Fi",
      director: "Christopher Nolan",
    };
    getMoveById.mockReturnValue(mockMovie);
    let result = await request(server).get("/movies/details/1");
    expect(result.status).toBe(200);
    expect(result.body.movie).toEqual(mockMovie);
  });
});

describe("controlle function", () => {
  // Exercise 5: Mock the Get All Movies Function

  it("should return all movies", () => {
    let mockMovie = [
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
    let result = getAllMovies();
    expect(result).toEqual(mockMovie);
  });
});
