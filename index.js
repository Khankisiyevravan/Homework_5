var playerChoice;
var comChoice;
var choices =['r','p','s'];
var playerPoint = null;
var comPoint = null;

function randomChoices( x , y) {
    return Math.floor(Math.random()*(x-y)+y);
}

function comChoices() {
    comChoice = choices[randomChoices(0,3)]
}
$('.pics').css(
    "display","none"
    )
window.onkeyup = function (e) {
    comChoices();
    console.log(e.key)
    if(e.key != 'r' && e.key !='p' && e.key !='s' ){
        alert("You made the wrong choice.")
        return;
    }
    playerChoice = e.key ; 
    $('.pics').css(
        "display","flex"
        )
        
    
 /*
    if(e.key === 'r' && e.key === 'p' && e.key === 's'){
        playerChoice = e.key ; 
        
    }else{
        alert("You made the wrong choice.")
        
        console.log(playerChoice + ' -----------p secimi');
        console.log(comChoice + ' -----------------c secimi');
return;
    }*/
    window.onreload
    var mePic = document.querySelector('.me-pic') ;
    var comPic =document.querySelector('.com-pic') ;
    var mePicS =document.querySelector('.me-pic-s') ;
    var comPicS =document.querySelector('.com-pic-s');
    if (playerChoice === 'r' && comChoice ==='p'){
        comPoint++;
        document.querySelector('.me-winlose').innerHTML = '<div style = "color:red; ">Lose</div>';
        document.querySelector('.com-winlose').innerHTML = '<div style = "color:green; ">Win</div>';
        
        mePic.src = "./img/rock.png"
        mePicS.innerHTML ='<p style = "font-size:30px">rock</p>'  
        comPic.src = "./img/p.png"
        comPicS.innerHTML ='<p style = "font-size:30px">paper</p>'
    } else if (playerChoice === 'p' && comChoice ==='r'){
        playerPoint++;
        document.querySelector('.me-winlose').innerHTML = '<div style = "color:green; ">Win</div>';
        document.querySelector('.com-winlose').innerHTML = '<div style = "color:red; ">Lose</div>';
        
        comPic.src = "./img/rock.png"
        mePicS.innerHTML ='<p style = "font-size:30px">paper</p>'
        mePic.src = "./img/p.png" 
        comPicS.innerHTML = "<p style = 'font-size:30px'>rock</p>"   
    } else if (playerChoice === 'r' && comChoice ==='s'){
        playerPoint++;
        document.querySelector('.me-winlose').innerHTML = '<div style = "color:green; ">Win</div>';
        document.querySelector('.com-winlose').innerHTML = '<div style = "color:red; ">Lose</div>';
        
        mePic.src = "./img/rock.png"
        mePicS.innerHTML ='<p style = "font-size:30px">rock</p>'
        comPic.src = "./img/scissors.png"
        comPicS.innerHTML = "<p style = 'font-size:30px'>scissors</p>"
    } else if (playerChoice === 's' && comChoice ==='r'){
        comPoint ++;
        document.querySelector('.me-winlose').innerHTML = '<div style = "color:red; ">Lose</div>';
        document.querySelector('.com-winlose').innerHTML = '<div style = "color:green; ">Win</div>';
 
        mePic.src = "./img/scissors.png"
        mePicS.innerHTML ='<p style = "font-size:30px">scissors</p>'
        comPic.src = "./img/rock.png"
        comPicS.innerHTML = "<p style = 'font-size:30px'>rock</p>"
    } else if (playerChoice === 'p' && comChoice ==='s'){
        comPoint++;
        document.querySelector('.me-winlose').innerHTML = '<div style = "color:red; ">Lose</div>';
        document.querySelector('.com-winlose').innerHTML = '<div style = "color:green; ">Win</div>';
    
        mePic.src="./img/p.png"
        mePicS.innerHTML ='<p style = "font-size:30px">paper</p>'
        comPic.src = "./img/scissors.png"
        comPicS.innerHTML = "<p style = 'font-size:30px'>scissors</p>"
    } else if (playerChoice === 's' && comChoice ==='p'){
        playerPoint++;
        document.querySelector('.me-winlose').innerHTML = '<div style = "color:green; ">Win</div>';
        document.querySelector('.com-winlose').innerHTML = '<div style = "color:red; ">Lose</div>';
   
        mePic.src = "./img/scissors.png"
        mePicS.innerHTML ='<p style = "font-size:30px">scissors</p>'
        comPic.src ="./img/p.png"
        comPicS.innerHTML ='<p style = "font-size:30px">paper</p>'

    } else {
        
        document.querySelector('.me-winlose').innerHTML = '<div>Draf</div>';
        document.querySelector('.com-winlose').innerHTML = '<div>Draf</div>';
        comPic.src = mePic.src;
        comPicS.innerHTML = mePicS.innerHTML;
    }
    
document.querySelector('.me-score').innerHTML = playerPoint ;
document.querySelector('.com-score').innerHTML = comPoint;


    
}

