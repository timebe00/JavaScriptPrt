function createPromise(x, timeoute) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(x);
        }, timeoute);
    });
}
createPromise("1", 100).then(v => console.log(v));
function createTuble2(v, v2) {
    return [v, v2];
}
function createTuble3(v, v2, v3) {
    return [v, v2, v3];
}
const t1 = createTuble2("user1", 1000);
const t2 = createTuble3("user1", 1000, true);
//# sourceMappingURL=generic.js.map