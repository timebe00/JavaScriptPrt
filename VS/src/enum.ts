//  자동으로 숫자 할당
//  실제 실제 값을 할당하는 것이 좋음
//  실제 값은 문자로도 가능하다.
enum StarbuksGrade {
    WELCOME = 0,
    GREEN = 2,
    GOLD = 1
}

function getDiscound(v: StarbuksGrade): number {
    switch(v) {
        case StarbuksGrade.WELCOME:
            return 0;
        case StarbuksGrade.GREEN:
            return 5;
        case StarbuksGrade.GOLD:
            return 10;
    }
}

console.log(getDiscound(StarbuksGrade.GREEN))
//  키 벨류 형태로도 접근 가능하다.
// console.log(StarbuksGrade[0])
console.log(StarbuksGrade.GREEN)