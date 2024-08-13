import { useQuery } from "@tanstack/react-query";
import { Genre } from "../types/Movies";
import { getGenres } from "../service/TMDB_API";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../assets/scss/navbar.scss"

//Function for retriving list of movie genres
const GenresList: React.FC = () => {
  const {
    data,
    isLoading,
    isError,
    error,
  } = useQuery<Genre>({
    queryKey: ['Genres'],
    queryFn: getGenres,
  });

  // Handling loading states and errors during data fetching.
  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error?.message}</span>
  }

  if (!data) {
    return <span>No data found</span>
  }

  return (
    <>
      {/* Mapping retrived list of genres that is then being used in navbar menu */}
      {data.genres.map((genre) =>
        <NavDropdown.Item className="genres" key={genre.id} as={Link} to={`/genre/${genre.id}/${genre.name}`}>
          {genre.name}
        </NavDropdown.Item>
      )}
    </>
  )
}

export default GenresList