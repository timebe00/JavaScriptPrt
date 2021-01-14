//  인터페이스 상에서 제네릭을 사용하여 정의
interface DB<T> {
    //  받는 타입 T 나가는 타입 void
    add(v: T): void;
    //  나가는 타입 T
    get(): T;
}

//  들어오는 함수 타입 T 상속 받은 타입 T
class D<T> implements DB<T> {
    add(v: T): void {
        throw new Error("Method not implemented.");
    }
    get(): T {
        throw new Error("Method not implemented.");
    }
    
}

interface JSONSerialier {
    serialize(): string;
}

//  들어오늘 타입은 JSONSerialier형태가 포함된다.
class LocalDB<T extends JSONSerialier> implements DB<T> {
    constructor(private localStroageKey: string) {
    }
    add(v: T) {
        localStorage.setItem(this.localStroageKey, v.serialize());
    }
    get(): T {
        const v = localStorage.getItem(this.localStroageKey);
        return (v) ? JSON.parse(v) : null;
    }
}

// interface User {name: string}

// const userDb = new LocalDB<User>('user');
// userDb.add(name: 'jay');
// const userA = userDb.get();
// userA.name;

interface Veigtable {
    v: string;
}

interface Meat {
    m: string;
}

interface Cart2<T> {
    //  Veigtable 혹은 Meat형태를 포함해야 한다.
    getItem(): T extends Veigtable ? Veigtable : Meat
}

const cart1: Cart2<Veigtable> ={
    getItem() {
        return {
            v: ''
        }
    }
}
cart1.getItem()