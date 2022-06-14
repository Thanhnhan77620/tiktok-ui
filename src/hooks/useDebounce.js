import { useEffect, useState } from 'react';

function useDebounce(value, deplay) {
    //lần đầu value =''
    //lần 2 khi index search truyền value vào thì ở đây nó vẫn không được truyền vào useState()
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceValue(value);
        }, deplay);

        return () => {
            clearTimeout(handler);
        };
    }, [value]);
    return debounceValue;
}

export default useDebounce;
