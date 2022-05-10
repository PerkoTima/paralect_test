export const getPagesArray = (totalPages, currentPage) => {
    let result = [];
    for(let i = 0; i < totalPages; i++){
        result.push(i + 1)
    }
    return result
}