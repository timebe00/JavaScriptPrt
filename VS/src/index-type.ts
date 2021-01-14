interface Props {
    //  string or number형만 옴
    //  키 값은 string타입
    [key: string]: string;
    //  name 값은 있어야만 함
    name: string;
}

/*
const p: Props = {
    //  key값이 string 인 경우 숫자로도 넣을 수 있다.
    a: 'd',
    b: 'e',
    c: '3',
    0: 'd',
    1: 'b',
    name:'hello'
}
*/

let keys: keyof Props;

interface User {
    name: string;
    age: number;
    hello(msg: string): void;
}

let keysOfUser: keyof User;
keysOfUser = "age"

let helloMethod: User["hello"];
helloMethod = function (msg:string) {
    
}
