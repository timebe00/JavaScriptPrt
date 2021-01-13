class LocalDB {
    constructor(localStroageKey) {
        this.localStroageKey = localStroageKey;
    }
    add(v) {
        localStorage.setItem(this.localStroageKey, JSON.stringify(v));
    }
    get() {
        const v = localStorage.getItem(this.localStroageKey);
        return (v) ? JSON.parse(v) : null;
    }
}
const userDb = new LocalDB('user');
const userA = userDb.get();
userA.name;
//# sourceMappingURL=generic2.js.map