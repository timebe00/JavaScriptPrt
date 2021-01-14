class Avido {
    play() {
        throw new Error("Method not implemented.");
    }
    stop() {
        throw new Error("Method not implemented.");
    }
}
class Bvido {
    play() {
        throw new Error("Method not implemented.");
    }
    stop() {
        throw new Error("Method not implemented.");
    }
}
let allvido;
function PNS(url) {
    if (url === "youtube") {
        allvido = new Avido;
    }
    else if (url === "twitch") {
        allvido = new Bvido;
    }
    else {
        const e = new Error;
        e.name = "Why?";
    }
    allvido.play;
    allvido.stop;
}
//# sourceMappingURL=prtclass.js.map