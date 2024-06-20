import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';

interface SearchProps<T> {
    searchFunction: (input: string) => Promise<T[]>;
    onSearchResults: (results: T[]) => void;
}

const Search = <T,>({ searchFunction, onSearchResults }: SearchProps<T>): JSX.Element => {
    const [error, setError] = useState<string | null>(null);
    const [input, setInput] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const handleSearch = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);
        setError(null);
        try {
            const results = await searchFunction(input);
            onSearchResults(results);
        } catch (error) {
            setError('An error occurred while searching.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Form className='inline mb-3 z-index-1' onSubmit={handleSearch}>
                <Row className="align-items-center">
                    <Col xs="auto" className="d-flex p-0">
                        <Form.Control
                            type="text"
                            placeholder="Search"
                            className="mr-sm-2 border-right-0"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            style={{ borderRadius: "0.25rem 0 0 0.25rem" }}
                        />
                        <Button type="submit" className="border-left-0" style={{ borderRadius: "0 0.25rem 0.25rem 0" }}>
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Form>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
        </>
    );
};

export default Search;
