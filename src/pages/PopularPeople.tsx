import { getPopularPeople } from "../service/TMDB_API"
import MovieCard from "../components/PeopleCard"
import { usePeople } from "../hooks/usePeople"
import { useState } from "react"
import TMDBPagination from "../components/TMDBPagination"

function PopularPeople() {
    const [page, setPage] = useState(1)


    const {
        isPending,
        isError,
        data,
        error,
        isFetching
    } = usePeople({
        queryKey: ['PopularPeople'],
        queryFn: getPopularPeople, page
    })

    if (isPending) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }

    return (
        <>
            <TMDBPagination
                currentPage={page}
                totalPages={data.total_pages > 500 ? 500 : data.total_pages}
                setPage={setPage}
                isFetching={isFetching}
            />

            <MovieCard people={data.results} />

            <TMDBPagination
                currentPage={page}
                totalPages={data.total_pages > 500 ? 500 : data.total_pages}
                setPage={setPage}
                isFetching={isFetching}
            />
        </>
    )
}

export default PopularPeople