const textEllipsis = (text, maxChars) => {
    return text.length > maxChars ? text.substring(0, maxChars) + '...' : text;
}

export {textEllipsis};