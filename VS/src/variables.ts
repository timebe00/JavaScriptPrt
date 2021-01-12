var score1 = 0;
let score2 = 200;
const defaultScore = 0;

function outer() {
    if(true) {
        //  let score   <-  any type
        //  let score: number;  //  tpye 어노테이션
        const score : number = 30;
        // score = "30"
    }
    // console.log(score);
    for(let i = 0; i < 3; i++) {
        setTimeout(function() {
            console.log(i);
        }, 100)
    }
}