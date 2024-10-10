import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMovies = createAsyncThunk("movie/fetchMovies", async () => {
  const response = await axios.get("http://localhost:5000/movies"); // Remplace l'URL par celle de ton API
  return response.data;
});

const initialState = {
  movies: [],
  watchList: [],
  watchedList: [],
  selectedMovie: [],
  statut: "idle", // Pour gérer le statut de la requête
  erreur: null,
};

const movieReducer = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addToWatchList: (state, action) => {
      state.watchList.push(action.payload);
    },
    addToWatchedList: (state, action) => {
      state.watchedList.push(action.payload);
    },
    removeFromWatchedList: (state, action) => {
      state.watchedList = state.watchedList.filter(
        (movie) => movie.id !== action.payload.id
      );
    },
    filterByCategory: (state, action) => {
      state.selectedMovie = state.movies.filter(
        (movie) => movie.category === action.payload
      );
    },
    filterByRating: (state, action) => {
      state.selectedMovie = state.movies.filter(
        (movie) => movie.rating === action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.statut = "loading";
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.statut = "succeeded";
        state.movies = action.payload; // Met à jour la liste des films avec les données reçues
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.statut = "failed";
        state.erreur = action.error.message; // Enregistre l'erreur
      });
  },
});

// Exporter les actions et le reducer
export const { addToWatchList, addToWatchedList, removeFromWatchedList } =
  movieReducer.actions;
export default movieReducer.reducer;
