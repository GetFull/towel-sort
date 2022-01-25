// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) {
        return [];
    }
    return matrix.reduce(
        (result, item, index) =>
            index % 2 ? result.concat(item.reverse()) : result.concat(item),
        []
    );
};
