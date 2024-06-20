import { getPopularPeople } from "../service/TMDB_API"
import PeopleCard from "../components/PeopleCard"
import { usePeople } from "../hooks/usePeople"
import TMDBPagination from "../components/TMDBPagination"
import { useSearchParams } from "react-router-dom"

function PopularPeople() {
    // Page value is used to determine the current pagination state for displaying paged data.
    const [searchParams, setSearchParams] = useSearchParams();
    // Retrieves the search parameters from the URL using useSearchParams.
    const page = Number(searchParams.get('page')) || 1;

    //Using React Query (TanStack) via usePeople custom hook to featch data
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

    //Function setting current page to params
    const handlePageChange = (newPage: number) => {
        setSearchParams({ page: newPage.toString() });
    };

    // Handling loading states and errors during data fetching.
    if (isPending) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }

    return (
        <>
            {/* Pagination component (Limited to 500 pages to prevent performance issues and crashes that occur with very high page numbers) */}
            <TMDBPagination
                currentPage={page}
                totalPages={data.total_pages > 500 ? 500 : data.total_pages}
                setPage={handlePageChange}
                isFetching={isFetching}
            />

            {/* Component with moviecards */}
            <PeopleCard people={data.results} />

            <TMDBPagination
                currentPage={page}
                totalPages={data.total_pages > 500 ? 500 : data.total_pages}
                setPage={handlePageChange}
                isFetching={isFetching}
            />
        </>
    )
}

export default PopularPeople