export interface TMDBPeopleResponse<T> {
    page: number
    results: T[]
    total_pages: number
    total_results: number
}

export interface People {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string | null;
    known_for: {
        backdrop_path: string | null;
        id: number;
        original_name?: string;
        original_title?: string;
        overview: string;
        poster_path: string | null;
        media_type: string;
        adult: boolean;
        name?: string;
        title?: string;
        original_language: string;
        genre_ids: number[];
        popularity: number;
        first_air_date?: string;
        release_date?: string;
        vote_average: number;
        vote_count: number;
        origin_country?: string[];
    }[];
}

export interface Person {
    adult: boolean;
    also_known_as: string[];
    biography: string;
    birthday: string | null;
    deathday: string | null;
    gender: number;
    homepage: string | null;
    id: number;
    imdb_id: string;
    known_for_department: string;
    name: string;
    place_of_birth: string | null;
    popularity: number;
    profile_path: string | null;
    combined_credits: {
        cast: {
            adult: boolean,
            backdrop_path: string,
            genre_ids: number[],
            id: number,
            original_language: string,
            original_title: string,
            overview: string,
            poster_path: string,
            release_date: string,
            title: string,
            video: boolean,
            vote_average: number,
            vote_count: number,
            character: string,
            credit_id: string,
            order: number,
            media_type: string
        }[];
    }
}