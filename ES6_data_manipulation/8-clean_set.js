export default function cleanset(set, startString) {
    if (!startString || typeof startString !== 'string') {
        return '';
    }

    return [...set]
    .filter((value) => typeof value === 'string' && value.startsWith(startString))
    .map((value) => value.slice(startString.length))
    .join('-');
}
