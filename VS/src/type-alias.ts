interface User {
    name: string;
}

interface Action {
    do() : void
}
//  타입 정의하기
type UserActon = User & Action;

// 다른 곳에서 User interface를 사용하여 오류남
function createUserAction(): UserActon {
    return {
        do() {},
        name: ''
    }
}

type StringOrNumber = string | number;
type Arr<T> = T[];
type P<T> = Promise<T>;

//  타입 정이시 사용 해야 되는 것을 정의할 수 있음
type User2 = {
    name: string;
    login(): boolean;
}

class UserImpl implements User2 {
    name: string;
    login(): boolean {
        throw new Error("Method not implemented.");
    }
}

type UserState = "PENDING" | "APPROVED" | "REJECTED";

function checkUser(user: User2): UserState {
    if(user.login) {
        return "APPROVED"
    } else {
        return "REJECTED"
    }
}