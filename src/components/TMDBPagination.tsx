import Pagination from 'react-bootstrap/Pagination';
import '../assets/scss/tmdbPagination.scss';

interface PaginationProp {
    currentPage: number
    totalPages: number
    setPage: (page: number) => void
    isFetching: boolean
}

const TMDBPagination: React.FC<PaginationProp> = ({ currentPage, totalPages, setPage, isFetching }) => {
    const handlePrevious = () => {
        if (currentPage > 1) {
            setPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (!isFetching && currentPage < totalPages) {
            setPage(currentPage + 1);
        }
    };

    const handlePageClick = (page: number) => {
        setPage(page);
    };

    const getPaginationItems = () => {
        const items = [];
        const startPage = Math.max(currentPage - 2, 1);
        const endPage = Math.min(currentPage + 2, totalPages);

        if (startPage > 1) {
            items.push(
                <Pagination.Item key={1} onClick={() => handlePageClick(1)}>
                    {1}
                </Pagination.Item>
            );
            if (startPage > 2) {
                items.push(<Pagination.Ellipsis key="prev-ellipsis" />);
            }
        }

        for (let page = startPage; page <= endPage; page++) {
            items.push(
                <Pagination.Item
                    key={page}
                    active={page === currentPage}
                    onClick={() => handlePageClick(page)}
                >
                    {page}
                </Pagination.Item>
            );
        }

        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                items.push(<Pagination.Ellipsis key="next-ellipsis" />);
            }
            items.push(
                <Pagination.Item key={totalPages} onClick={() => handlePageClick(totalPages)}>
                    {totalPages}
                </Pagination.Item>
            );
        }

        return items;
    };

    return (
        <Pagination className='tmdb-pagination container d-flex justify-content-center mt-3'>
            <Pagination.First onClick={() => setPage(1)} disabled={currentPage === 1} />
            <Pagination.Prev onClick={handlePrevious} disabled={currentPage === 1} />

            {getPaginationItems()}

            <Pagination.Next onClick={handleNext} disabled={currentPage >= totalPages || isFetching} />
            <Pagination.Last onClick={() => setPage(totalPages)} disabled={currentPage === totalPages} />
        </Pagination>
    );
};

export default TMDBPagination;
