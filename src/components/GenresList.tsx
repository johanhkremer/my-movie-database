import { useQuery } from "@tanstack/react-query";
import { Genre } from "../types/Movies";
import { getGenres } from "../service/TMDB_API";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

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
      {data.genres.map((genre) =>
        <NavDropdown.Item key={genre.id} as={Link} to={`/genre/${genre.id}`}>
          {genre.name}
        </NavDropdown.Item>
      )}
    </>
  )
}

export default GenresList