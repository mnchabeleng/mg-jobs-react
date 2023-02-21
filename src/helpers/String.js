function firstParagraph(str) {
    return ''
}

function truncate(str, length) {
    if(str.length > length) {
        return str.slice(0, length) + '...'
    }
    
    return str;
}