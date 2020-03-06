import React from 'react';
import { useHistory } from "react-router-dom";

import './styles.scss';

const Pagination = (props) => {
    const {page, hasNext, url} = props;
    const hasPrevious = page !== 1;
    let history = useHistory();

    const handleClick = (nextPage) => {
        history.push(url + 'page=' + nextPage);
    }

    return (
        <div id="pagination">
            <ul>
                <li>
                    <button
                        onClick={() => { handleClick(page - 1) }}
                        disabled={!hasPrevious}>Previous
                    </button>
                </li>
                <li className="active"><p>{page}</p></li>
                <li>
                    <button
                        onClick={() => { handleClick(page + 1) }}
                        disabled={!hasNext}>Next
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default Pagination;