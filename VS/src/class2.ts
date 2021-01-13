interface Person {
    name : string;
    say(msg: string) : void;
}

interface Programmer {
    writeCode(requirment: string): string;
}

abstract class Korean implements Person {
    public abstract jumin: number;

    constructor(public name: string) {

    }

    say(msg: string) {
        console.log(msg)
    }

    abstract loveKimchi(): void;
}

class KoreanProgrammer extends Korean implements Programmer {
    constructor(public name: string, public jumin:number) {
        super(name);
    }

    say(message: string): void {
        console.log(message);
    }

    writeCode(requirment: string): string {
        console.log(requirment);
        return requirment + '......';
    }

    loveKimchi(): void {
        throw new Error("Method not implemented.")
    }
}

const jay = new KoreanProgrammer('jay', 2222);
// const jay2 = new Korean('jay');