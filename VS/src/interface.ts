//  인터페이스 설정
interface TV {
    turnOn(): boolean;  //  리턴 값 정의
    turnOff(): void;    //  리턴 값 없음
}

//  인터페이스 사용 클래스
const myTV: TV = {
    turnOn() {
        return true;
    },
    turnOff() {

    }
}

//  사용하는 클래스
function tryTurnOn(tv: TV) {
    tv.turnOn;
}
tryTurnOn(myTV);

//  인터페이스 생성
interface Cell {
    row: number;        //  인터페이스 메소드 리턴 숫자
    col: number;        //  인터페이스 메소드 리턴 숫자
    piece?: Piece;      //  없을 수도 있다. 리턴 Piece
}

interface SinUp {
    email:string;
    id: string;
    password: string;
}

function ajaxSignup(data: SinUp) {
}

// ajaxSignup({email});


interface Piece {
    move(from: Cell, to: Cell): boolean;
}

//  const cells 이 상속 받음
function createBoard() {
    //  상수에 인터페이스 상속, Cell이라는 타입으로 배열화 함
    const cells: Cell[] = [];
    for(let row = 0; row < 4; row++) {
        for(let col = 0; col < 3; col++) {
            cells.push({
                // row:row,
                // col:col
                //  상속 받은 객체에 인자를 넣어준다.
                row,    //es6부터 사용
                col     //es6부터 사용
            })
        }
    }
    return cells;
}

//  createBoard -> cells리턴 -> cells는 Cell을 상속 받음
//  board = cells -> board도 Cell를 상속 받음
const board = createBoard();
//  board에 0번째 배열에 piece를 정의
//  piece는 Piece형태 임으로 Piece형태로 값을 넣어줌
board[0].piece = {
    move(from: Cell, to:Cell) {
        return true;    //  리턴값 boolen
    }
}