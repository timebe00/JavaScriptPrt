//  가변타입 제네릭 선언
function createPromise<T>(x: T, timeoute: number) {
    return new Promise<T>((resolve, reject) => {
        setTimeout(() => {
            resolve(x);
        }, timeoute)
    });
}

//  타입 전달 가능 에러 없을 시 리턴값 로그에 출력
createPromise<string>("1", 100).then(v => console.log(v));

function createTuble2<T, U>(v: T, v2: U): [T, U] {
    return[v, v2];
}

function createTuble3<T, U, D>(v: T, v2: U, v3: D): [T, U, D] {
    return[v, v2, v3];
}

const t1 = createTuble2("user1", 1000);
const t2 = createTuble3("user1", 1000, true);