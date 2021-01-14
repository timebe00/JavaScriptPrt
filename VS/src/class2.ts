interface Person {
    name : string;
    say(msg: string) : void;
}

interface Programmer {
    writeCode(requirment: string): string;
}

//  상속 전문 클래스(추상 클래스) : abstract
abstract class Korean implements Person {
    public abstract jumin: number;
    //  생성자에서 값을 받아서 자동으로 name 필드를 생성
    constructor(public name: string) {

    }
    //  인터페이스로 인한 생성
    say(msg: string) {
        console.log(msg)
    }
    //  추상클래스 생성 리턴값은 void
    abstract loveKimchi(): void;
}

//  Korean과 Programmer를 상속 받아서 KoreanProgrammer 생성
class KoreanProgrammer extends Korean implements Programmer {
    //  생성자에서 값을 받아서 자동으로 name, jaumin 필드를 생성
    constructor(public name: string, public jumin:number) {
        //  생성자로 받은 이름을 상위로 올림
        super(name);
    }
    //  Korean로 인하여 상속 받은 매소드
    say(message: string): void {
        console.log(message);
    }
    //  Programmer로 인하여 상속 받은 메소드
    writeCode(requirment: string): string {
        console.log(requirment);
        return requirment + '......';
    }
    //  Korean로 인하여 상속 받은 메소드
    loveKimchi(): void {
        throw new Error("Method not implemented.")
    }
}

const jay = new KoreanProgrammer('jay', 2222);
// const jay2 = new Korean('jay');