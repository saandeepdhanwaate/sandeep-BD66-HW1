const express = require("express");
const app = express();
const cors = require("cors");
const {
  getAllMovies,
  getMoveById,
} = require("./controllers/index.controller.js");
app.use(cors());
app.use(express.json());


// Exercise 1: Retrieve All Movies  🟢
app.get("/movies", async (req, res) => {
  try {
    let movies = await getAllMovies();
    if (!movies) {
      return res.status(404).json({ message: "No movies found" });
    }
    return res.status(200).json({ movies });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

// Exercise 2: Retrieve Movie by ID 🟢

app.get("/movies/details/:id", async (req, res) =>{
  try{
    let id = parseInt(req.params.id);
    let movie = await getMoveById(id);
    if (!movie) {
      return res.status(404).json({ message: "No movie found" });
    }
    return res.status(200).json({ movie });
  }catch(error){
    return res.status(500).json({error : error.message})
  }
})



module.exports = {
  app,
};
