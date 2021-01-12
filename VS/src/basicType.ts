//  타입들
let numValue: number;
let stringValue: String;
let boolenValue: boolean;
let undefinedValue: undefined;  //  모든 타입의 하위 타입
let nullValue: null;    //  모든 타입의 하위 타입
let objValue: object;   //  원시형 타입 할당 불가, 객체 할당 가능
let symbolValue: symbol;    //  Symbol타입으로만 선언해서 사용
let anyValue: any;  //  모든 타입의 상위 타입


numValue = 3.3;
stringValue = "hello";  //  개인화 하면 에러
stringValue = 'hello';  //  개인화 하면 에러
stringValue = ` 
hello
${1+1}
hi
`//  개인화 가능

boolenValue = true;
// undefinedValue = undefined;
undefinedValue = null;
objValue = {name : 'jay'};
objValue = new String('hello');

symbolValue = Symbol()  //  유니크한 값 생김

let nameList: string[];
nameList = ["1", "3"];
nameList.push("333");

let user1: { name:string, scorce: number};
user1 = {
    name: 'jay',
    scorce: 30
}

let tuple2: [number, string];
let tuple3: [number, number, string];
tuple2 = [1, "hello"];
tuple3 = [1,2,"hello"];