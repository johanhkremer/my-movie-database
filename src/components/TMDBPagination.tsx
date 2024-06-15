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

    let active = currentPage;
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }

    const handlePageClick = (page: number) => {
        setPage(page);
    };

    const getPaginationItems = () => {
        const items = [];
        const startPage = Math.max(currentPage - 2, 1);
        const endPage = Math.min(currentPage + 2, totalPages);

        // Add Previous Ellipsis
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

        // Add Page Numbers
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

        // Add Next Ellipsis
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

        <Pagination className='container d-flex justify-content-center mt-3'>
            <Pagination.First onClick={() => setPage(1)} disabled={currentPage === 1} />
            <Pagination.Prev onClick={handelPrevious} disabled={currentPage === 1} />

            {getPaginationItems()}

            <Pagination.Next onClick={handelNext} disabled={currentPage >= totalPages || isFetching} />
            <Pagination.Last onClick={() => setPage(totalPages)} disabled={currentPage === totalPages} />
        </Pagination>
    );
}

export default TMDBPagination;

//! Bugg! Popular-sidan hänger sig när man klickar på lastPage
//! Måste ordna så pagineringen på specifika sidor fungerar