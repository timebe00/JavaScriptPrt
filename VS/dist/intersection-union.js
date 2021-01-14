function createUserActrion(u, a) {
    return Object.assign(Object.assign({}, u), a);
}
const u = createUserActrion({ name: "jay" }, { do() { } });
function comper(x, y) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x === y ? 0 : x > y ? 1 : -1;
    }
    if (typeof x === 'string' && typeof y === 'string') {
        return x.localeCompare(y);
    }
    throw Error('not suppered type');
}
const v = comper(1, 2);
console.log([3, 2, 1].sort(comper));
console.log(['c', 'b', 'a'].sort(comper));
function isAction(v) {
    return v.do != undefined;
}
function process(v) {
    if (isAction(v)) {
        v.do();
    }
    else {
        console.log(v.name);
    }
}
//# sourceMappingURL=intersection-union.js.map