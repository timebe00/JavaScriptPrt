//  export : 외부에서 쓸 수 있게 만들어줌
export interface Hello {
    text: string;
}

export const user = {
    name: 'user1'
}

//  default는 하나만 가능
// export default class A {
//     a() {

//     }
// }

type d = Hello & { hi(): void}
export default d;
