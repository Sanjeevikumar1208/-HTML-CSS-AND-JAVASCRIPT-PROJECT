function start(){
    document.getElementById("start").style.visibility="hidden";
    document.getElementById("rock").style.visibility="visible";
    document.getElementById("paper").style.visibility="visible";
    document.getElementById("scissors").style.visibility="visible";

}

clickedHand=["<img src='./image/rock.png' id='img1'>","<img src='./image/paper.png' id='img1'>","<img src='./image/scissors.png' id='img1'>" ];

clickedRightHand=["<img src='./image/rock.png' id='img2'>","<img src='./image/paper.png' id='img2'>","<img src='./image/scissors.png' id='img2'>" ];

function game(position){
    document.getElementById("img1").style.animation='shakeLeft 1.6s 3 ease-in-out';
    document.getElementById("img2").style.animation='shakeRight 1.6s 3 ease-in-out';

    var random=Math.floor(Math.random()*3);
    setTimeout(() => {
        document.getElementById("hand2").innerHTML=clickedRightHand[random];
        document.getElementById("hand1").innerHTML=clickedHand[position];
    }, 5000);
    setTimeout(() => {
        if(random==position){
            alert("MATCH DRAW");
            window.location.reload();
        }
        else if(position==0 && random==2){
            alert("YOU WIN , GOOD JOB");
            window.location.reload();
        }
        else if(position==1 && random==0){
            alert("YOU WIN , GOOD JOB");
            window.location.reload();
        }
        else if(position==2 && random==1){
            alert("YOU WIN , GREAT");
            window.location.reload();
        }
        else{
            alert("COMPUTER WIN,TRY NEXT TIME");
            window.location.reload();
        }
    }, 5500);
}