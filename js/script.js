const startingminutes = 60;
var time = startingminutes * 60;

const countdownEl=document.getElementById('countdown');
//  console.log(countdownEl)
let ram = setInterval(() => {
    
    if (time==0) {clearInterval(ram)
        
    }
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ?  '0' + seconds : seconds;

    countdownEl.innerHTML =  `${minutes}:${seconds}`;
    time--;
    // console.log(time)
}, 1000);