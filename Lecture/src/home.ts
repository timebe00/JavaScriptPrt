interface PS {
    play();
    stop();
}
let ps : PS;
let url : string;
class YVido implements PS {

    play() {
        
    }
    
    stop() {

    }
}

class HVido implements PS {
    constructor(parameters) {
        
    }
    play() {
        throw new Error("Method not implemented.");
    }
    stop() {
        throw new Error("Method not implemented.");
    }
}

document.getElementById("OKbtn").click = function name() {
    let textElement  = <HTMLInputElement>document.getElementById('writeurl');
    let txturl = textElement .value
    console.log(txturl)
}