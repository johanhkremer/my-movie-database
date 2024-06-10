import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import PageNotFound from "./pages/PageNotFound"
import NowPlayingMovies from "./pages/NowPlayingMovies"
import PopularMovies from "./pages/PopularMovies"
import TopRatedMovies from "./pages/TopRatedMovies"
import Navigation from "./components/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div id="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nowplayingmovies" element={<NowPlayingMovies />} />
        <Route path="/popularmovies" element={<PopularMovies />} />
        <Route path="/TopRatedMovies" element={<TopRatedMovies />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <ReactQueryDevtools />

    </div>
  )
}

export default App
