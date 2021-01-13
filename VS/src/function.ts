// (함수 선언) (함수 이름)(내장 변수) : 리턴타입
function add(x: number, y: number) : number {
    return x + y
}
const result = add(1,2) //  result는 숫자 타입

//  내장 함수에 ? 시 없어도 됨
//  '='은 기본값 선택 가능
function bildUseInfo(name: string = "-", email: string = "-") {
    return{ name, email };
}
const user = bildUseInfo();

//  함수 화살표 함수로 나타냄
const add2 = (a:number, b:number):number => a + b;

interface Storage {
    a: string;
}
interface ColdStorage {
    b: string;
}

function store(type: "아이스크림"): ColdStorage
function store(type: "통조림"): Storage

function store(type: "통조림" | "아이스크림") {
    if(type === "통조림") {
        return {a: "통조림"}
    } else if (type === "아이스크림"){
        return {b: "아이스크림"}
    } else {
        throw new Error('unsupported type')
    }
}

const s = store('아이스크림');
s.b;