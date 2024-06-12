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
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <ReactQueryDevtools />

    </div>
  )
}

export default App
