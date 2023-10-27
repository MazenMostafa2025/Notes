var memoryStorage = require('memorystorage');
var store = new memoryStorage('notes');

exports.getKeys = (store) => {
    var keys = [];
    for (let i = 0 ; i < store.length; i++)
    {
        var key = store.key(i);
        keys.push(key);
    }
    return keys;
}
exports.getValues = (store) => {
    var values = [];
    for (let i = 0 ; i < store.length; i++)
    {
        var key = store.key(i);
        var value = store.getItem(key);
        values.push(value);
    }
    return values;
}
exports.store = store;