import React from 'react';

import './styles.scss';

const Pagination = (props) => {
    const {page, setPage, hasNext} = props;
    const hasPrevious = page !== 1;

    const handleClickNext = () => {
        setPage(page + 1);
    }

    const handleClickPrevious = () => {
        setPage(page - 1);
    }


    return (
        <div id="pagination">
            <ul>
                <li>
                    <button
                        onClick={handleClickPrevious}
                        disabled={!hasPrevious}>Previous
                    </button>
                </li>
                <li className="active"><p>{page}</p></li>
                <li>
                    <button
                        onClick={handleClickNext}
                        disabled={!hasNext}>Next
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default Pagination;