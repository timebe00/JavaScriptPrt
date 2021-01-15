//  시작과 중지를 인식하기 위해 인터페이스 생성
interface PS {
    //  시작함수
    play(): void;
    //  중지 함수
    stop(): void;
    //  걸린 시간 함수
    time(): number;
}

//  onYouTubePlayerAPIReady을 인식하기 위해 인터페이스 생성
interface Ytn {
    onYouTubePlayerAPIReady(): any
}

//  interface 상속
let ps : PS;
//  버튼 아이디 값 가져오기
//  input테그 값을 가져오기 위해 확인 버튼 할당
let btnOKElement : HTMLButtonElement = <HTMLButtonElement>document.getElementById("OKbtn");
//  비디오를 준비하기 위해 video테그 할당
let sourElement : HTMLVideoElement = <HTMLVideoElement>document.getElementById("player");
//  시작 버튼을 인식하기 위해 버튼 할당
let btnstartElement : HTMLButtonElement = <HTMLButtonElement>document.getElementById("btnPlay");
//  중지 버튼을 인식하기 위해 버튼 할당
let btnstopElement : HTMLButtonElement = <HTMLButtonElement>document.getElementById("btnStop");
//  시간 확인을 위한 버튼 할당
let btntimeElement : HTMLButtonElement = <HTMLButtonElement>document.getElementById("btntime");

//  Youtob: onYouTubePlayerAPIReady을 인식 시켜주는 함수
let Youtob : Ytn
//  player2가 초기화를 안시키기 위해서 빼두었음
let player2: any
//  script를 받아와서 YouTube api를 넣어주기 위해 선언
const tag = document.createElement('script');
//  YouTube api를 넣기
tag.src = "https://www.youtube.com/player_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//  시간 계산할 배열
let date : number[]


//  유튜브 영상 클래스
class YVido implements PS {
    //  iframe으로 변경시켜 유튜브 준비
    onYouTubePlayerAPIReady() {
        player2 = new YT.Player('player', {
            height: '360',
            width: '640',
            videoId: 'M7lc1UVf-VE',
            });
    }
    //  유튜브 영상 시작
    play() {
        player2.playVideo();
    }
    //  유튜브 영상 멈춤
    stop() {
        player2.stopVideo();
    }
    //  시간 함수
    time() {
        console.log(player2.getCurrentTime())
        return player2.getCurrentTime()
    }
}

//  html 영상 클래스
class HVido implements PS {
    //  HTML 비디오 인식
    private player : HTMLVideoElement = <HTMLVideoElement>document.getElementById("player");
    //  영상 시작
    play() {
        console.log("play")
        this.player.play()
    }
    //  영상 멈춤
    stop() {
        console.log("stop")
        this.player.pause();
    }
    time() {
        return null;
    }
}

//  확인 버튼 눌렀을때
btnOKElement.onclick = () => {
    //  input id값 가져오기
    let textElement = <HTMLInputElement>document.getElementById('writeurl');
    //  input에 들어있는 내용 가져오기
    let txturl = textElement.value
    console.log(txturl)

    //  you라고 적을 시 지정된 유튜브 영상 시작
    if(txturl === "you"){
        console.log("you")
        //  PS를 상속받은 클래스에 할당
        Youtob = new YVido
        //  돔에 onYouTubePlayerAPIReady를 인식시켜 유튜브 준비
        Youtob.onYouTubePlayerAPIReady()
        //  PS를 상속받은 클래스에 할당
        ps = new YVido
    } 
    //  html라고 적을 시 html5영상으로 할당
    else if (txturl === "html") {
        console.log("ht")
        //  video 테그에 지정 url를 집어 넣어서 영상 준비
        sourElement.src = "https://media.w3.org/2010/05/sintel/trailer.mp4"
        //  PS를 상속받은 클래스에 할당
        ps = new HVido
    }
}

//  시작 버튼 클릭 시 발동 함수
btnstartElement.addEventListener('click', function() {
    console.log("play")
    //  시작 함수 재생
    ps.play()
})

//  중지 버튼 클릭 시 발동 함수
btnstopElement.addEventListener('click', function() {
    console.log("stop")
    //  중지 함수 재생
    ps.stop()
})

btntimeElement.addEventListener('click', function() {
    alert(ps.time())
})