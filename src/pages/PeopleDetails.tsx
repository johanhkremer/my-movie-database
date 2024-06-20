import { useQuery } from "@tanstack/react-query"
import { getPersonDetails } from "../service/TMDB_API"
import { useParams } from "react-router-dom"
import PersonDetailsCard from "../components/PersonDetailsCard";

function PersonDetails() {
    // Extracting the 'id' parameter from the URL using useParams.
    const { id } = useParams<{ id: string }>();

    //Using React Query (TanStack) to featch data
    const {
        isLoading,
        isError,
        data,
        error } = useQuery({
            queryKey: ['PersonDetails', id],
            queryFn: () => getPersonDetails(Number(id))
        })

    // Handling loading states and errors during data fetching.
    if (isLoading) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }

    if (!data) {
        return <span>No data found</span>
    }

    return (
        // Component with detailed information about a person
        <PersonDetailsCard person={data} />
    )
}

export default PersonDetails