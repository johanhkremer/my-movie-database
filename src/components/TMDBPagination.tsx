import Pagination from 'react-bootstrap/Pagination';

interface PaginationProp {
    currentPage: number
    totalPages: number
    setPage: React.Dispatch<React.SetStateAction<number>>
    isFetching: boolean
}

const TMDBPagination: React.FC<PaginationProp> = ({ currentPage, totalPages, setPage, isFetching }) => {
    const handelPrevious = () => {
        if (currentPage > 1) {
            setPage(currentPage - 1)
        }
    }

    const handelNext = () => {
        if (!isFetching && currentPage < totalPages) {
            setPage(currentPage + 1)
        }
    }

    return (
        <Pagination className='container d-flex justify-content-center'>
            <Pagination.First onClick={() => setPage(1)} disabled={currentPage === 1} />
            <Pagination.Prev onClick={handelPrevious} disabled={currentPage === 1} />
            <Pagination.Item
                onClick={() => setPage(currentPage)}
                active={currentPage === currentPage}>{currentPage}
            </Pagination.Item>

            {/* Måste ordna så att pagineringen funerar korrekt med antal sidor efter sista sidan */}
            <Pagination.Item onClick={() => setPage(currentPage + 1)}>{currentPage + 1}</Pagination.Item>
            <Pagination.Item onClick={() => setPage(currentPage + 2)}>{currentPage + 2}</Pagination.Item>
            <Pagination.Item onClick={() => setPage(currentPage + 3)}>{currentPage + 3}</Pagination.Item>
            <Pagination.Item onClick={() => setPage(currentPage + 4)}>{currentPage + 4}</Pagination.Item>
            <Pagination.Next onClick={handelNext} disabled={currentPage >= totalPages || isFetching} />
            <Pagination.Last onClick={() => setPage(totalPages)} disabled={currentPage === totalPages} />
        </Pagination>
    );
}

export default TMDBPagination;

//! Bugg! Popular-sidan hänger sig när man klickar på lastPage
//! Måste ordna så pagineringen på specifika sidor fungerar