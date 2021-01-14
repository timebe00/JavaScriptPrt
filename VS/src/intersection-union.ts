interface User {
    name: string;
}

interface Action {
    do() : void;
}

//  인터페이스 2개를 합쳐서 리턴하라고 함
function  createUserActrion(u: User, a: Action): User & Action {
    return {...u, ...a};
}

const u = createUserActrion({ name: "jay" }, {do() {}});

//  이럴것 이라고 명시해 준다.
function comper(x:string, y: string);
function comper(x:number, y: number);

//  문자 혹은 숫자타입으로 들어옴
function comper(x:string | number, y: string | number) {
    if(typeof x === 'number' && typeof y === 'number') {
        return x === y ? 0 : x > y ? 1 : -1
    }

    if(typeof x === 'string' && typeof y === 'string') {
        return x.localeCompare(y)
    }
    throw  Error('not suppered type');
}

const v= comper(1, 2);

console.log([3,2,1]. sort(comper))
console.log(['c', 'b', 'a']. sort(comper))

//  타입가드를 Actio으로 정의함 : v is Actio
function isAction(v:User | Action): v is Action {
    return (<Action>v).do != undefined;
}

function process(v:User | Action) {
    //  타입 예상 고정 (<Action>v)
    // if((<Action>v).do) {
    //     (<Action>v).do()
    // }
    if(isAction(v)) {
        v.do()
    } else {
        console.log(v.name)
    }
}
