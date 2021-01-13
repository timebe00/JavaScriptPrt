interface IVido {
    play();
    stop();
}

class A implements IVido {
    play() {
        throw new Error("Method not implemented.");
    }
    stop() {
        throw new Error("Method not implemented.");
    }
}

let a:IVido

function PNS(url:string) {
    if(url === "youtube") {
        a.play;
        a.stop;
    } else if(url === "twitch") {
        a.play;
        a.stop
    } else {
        const e = new Error
        e.name = "Why?"
    }
    
}
