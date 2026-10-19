// Paginated response shape shared by all TMDB list endpoints
export interface TMDBResponse<T> {
    page: number
    results: T[]
    total_pages: number
    total_results: number
}
