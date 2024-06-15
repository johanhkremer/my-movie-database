import { useQuery } from "@tanstack/react-query"
import { getPersonDetails } from "../service/TMDB_API"
import { useParams } from "react-router-dom"
import PersonDetailsCard from "../components/PersonDetailsCard";

function PersonDetails() {
    const { id } = useParams<{ id: string }>();


    const {
        isLoading,
        isError,
        data,
        error } = useQuery({
            queryKey: ['PersonDetails', id],
            queryFn: () => getPersonDetails(Number(id))
        })

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
        <PersonDetailsCard person={data} />
    )
}

export default PersonDetails