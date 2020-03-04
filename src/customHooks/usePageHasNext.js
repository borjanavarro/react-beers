import { useState } from 'react';

const usePageHasNext = () => {
    const [hasNext, setHasNext] = useState(false);

    const hasNext = ({apiFunction, params}) => {
        const nextItems = await apiFunction({...params});
        nextItems && nextItems.length > 0 ? setHasNext(true) : setHasNext(false);
    }

    return hasNext;
}

export default usePageHasNext;