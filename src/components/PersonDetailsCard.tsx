import { Person } from "../types/People"
import "../assets/scss/personDetailsCards.scss"

type PersonDetailsProps = {
    person: Person
}

const PersonDetailsCard: React.FC<PersonDetailsProps> = ({ person }) => {
    return (
        <div key={person.id}>
            <div>
                <h1>{person.name}</h1>
                {person.profile_path && (
                    <img src={`https://image.tmdb.org/t/p/w500${person.profile_path}`} alt={person.name} />
                )}
                <p>{person.biography}</p>
                <p>Born: {person.birthday}</p>
                {person.deathday && <p>Died: {person.deathday}</p>}
                <p>Popularity: {person.popularity}</p>
            </div>
            <div></div>
        </div>
    )
}

export default PersonDetailsCard