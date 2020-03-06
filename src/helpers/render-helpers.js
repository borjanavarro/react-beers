import errorImg from '../img/beer.svg';

const textEllipsis = (text, maxChars) => {
    return text.length > maxChars ? text.substring(0, maxChars) + '...' : text;
}

const onError = (ref) => {
    ref.current.src = errorImg;
    ref.current.parentNode.classList.add('error');
  }

export {textEllipsis, onError};