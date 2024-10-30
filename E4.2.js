const Object = {
    name: 'TV',
    model: 'LG',
    year: 2022,
};
console.log(isProperty(Object, 'model'));
function isProperty(object, property) {
    if (object.hasOwnProperty(property)) {
        return true;
    } else {
        return false;
    }
}