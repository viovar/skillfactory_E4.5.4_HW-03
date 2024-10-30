//@@ -0,0 +1,14 @@
const Object = {
    name: 'TV',
    model: 'LG',
    year: 2022,
};
getObjectValues(Object);
function getObjectValues(obj) {
    for (let key in obj) {
        console.log(key + ' = ' + obj[key]);
    }
}