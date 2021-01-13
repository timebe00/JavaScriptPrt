class LocalDB<T> {
    constructor(private localStroageKey: string) {
    }
    add(v: T) {
        localStorage.setItem(this.localStroageKey, JSON.stringify(v));
    }
    get(): T {
        const v = localStorage.getItem(this.localStroageKey);
        return (v) ? JSON.parse(v) : null;
    }
}

interface User {name: string}

const userDb = new LocalDB<User>('user');
// userDb.add('hello');
const userA = userDb.get();
userA.name;