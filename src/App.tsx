import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/scss/app.scss"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { Routes, Route } from "react-router-dom"
import GenreMovies from './pages/GenresMovies';
import HomePage from "./pages/HomePage"
import MovieDetails from './pages/MovieDetails';
import Navigation from "./components/Navbar"
import NowPlayingMovies from "./pages/NowPlayingMovies"
import PageNotFound from "./pages/PageNotFound"
import PeopleDetails from './pages/PeopleDetails';
import PopularMovies from "./pages/PopularMovies"
import PopularPeople from './pages/PopularPeople';
import TopRatedMovies from "./pages/TopRatedMovies"

function App() {

  return (
    <div id="App">
      <div className="app">
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
      </div>
      <ReactQueryDevtools />
    </div>
  )
}

export default App
