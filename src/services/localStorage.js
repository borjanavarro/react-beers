function setItem(storageKey, objKey, objValue) {
    let item = getItem(storageKey);

    item = {
        ...item,
        [objKey]: objValue
    };

    localStorage.setItem(storageKey, JSON.stringify(item));
}

function getItem(storageKey) {
    const item = localStorage.getItem(storageKey);
    return item ? JSON.parse(item) : {};
}

export default {
    setItem,
    getItem
}