"use strict";

var a = 10;
var b = 10;
var arr = [1, 2, 2, 3, 5, 3, 2];
function fn(array) {
    var s = new Set();
    for (var i = 0; i < array.length; i++) {
        s.add(array[i]);
    }
    var newArr = new Array();
    var values = s.values();
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = values[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var v = _step.value;

            newArr.push(v);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return newArr;
}
function fn(array) {
    var s = new Set(array);
    return Array.from(s);
}
console.log(fn(arr));
