import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Navigation from "./components/Navbar"
import NowPlayingMovies from "./pages/NowPlayingMovies"
import PageNotFound from "./pages/PageNotFound"
import PopularMovies from "./pages/PopularMovies"
import TopRatedMovies from "./pages/TopRatedMovies"
import MovieDetails from './pages/MovieDetails';
import PopularPeople from './pages/PopularPeople';
import PeopleDetails from './pages/PeopleDetails';
import GenreMovies from './pages/GenresMovies';
import "./assets/scss/app.scss"


function App() {

  return (
    <div id="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nowplayingmovies" element={<NowPlayingMovies />} />
        <Route path="/popularmovies" element={<PopularMovies />} />
        <Route path="/topratedmovies" element={<TopRatedMovies />} />
        <Route path="/movie/:id" element={< MovieDetails />} />
        <Route path='/popularpeople' element={<PopularPeople />} />
        <Route path="/person/:id" element={< PeopleDetails />} />
        <Route path="/genre/:id" element={< GenreMovies />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <ReactQueryDevtools />

    </div>
  )
}

export default App
