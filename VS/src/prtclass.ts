//  인터페이스 선언
interface IVido {
    //  시작 함수
    play();
    //  멈춤 함수
    stop();
}

//  IVido를 상속받아 Avido 선언
class Avido implements IVido {
    play() {
        throw new Error("Method not implemented.");
    }
    stop() {
        throw new Error("Method not implemented.");
    }
}

//  IVido를 상속받아 Avido 선언
class Bvido implements IVido {
    play() {
        throw new Error("Method not implemented.");
    }
    stop() {
        throw new Error("Method not implemented.");
    }
}

//  IVido 선언
let allvido:IVido

//  url에 따라 선언되는 클래스 변형
function PNS(url:string) {
    if(url === "youtube") {
        //  Avido 받음
        allvido = new Avido
    } else if(url === "twitch") {
        //  Bvido 받음
        allvido = new Bvido
    } else {
        //  에러뜸
        const e = new Error
        e.name = "Why?"
    }

    //  클래스에 있는 것을 인터페이스로 통하여 안정성 있게 실행
    allvido.play
    allvido.stop
}
