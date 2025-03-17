import Pagination from 'react-bootstrap/Pagination';
import '../assets/scss/tmdbPagination.scss';

interface PaginationProp {
    currentPage: number;
    totalPages: number;
    setPage: (page: number) => void;
    isFetching: boolean;
}

const TMDBPagination: React.FC<PaginationProp> = ({ currentPage, totalPages, setPage, isFetching }) => {
    return (
        <div className='tmdb-pagination container d-flex flex-column align-items-center mt-3'>
            <span>Page {currentPage} of {totalPages}</span>
            <Pagination className='d-flex justify-content-center mt-2'>
                <Pagination.First onClick={() => setPage(1)} disabled={currentPage === 1 || isFetching} />
                <Pagination.Prev onClick={() => setPage(currentPage - 1)} disabled={currentPage === 1 || isFetching} />
                <Pagination.Next onClick={() => setPage(currentPage + 1)} disabled={currentPage >= totalPages || isFetching} />
                <Pagination.Last onClick={() => setPage(totalPages)} disabled={currentPage === totalPages || isFetching} />
            </Pagination>
        </div>
    );
};

export default TMDBPagination;
