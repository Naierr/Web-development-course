// alert("Alert");
// $("h1").css("color"","Blue");
const colors =["red","blue","green","yellow"];
const gamePattern = [];
const userClickedPattern =[];
let level =0;
let started= false;
let randomChosenColour = 0;
let randomNumber =Math.floor(Math.random()*4);
$(document).keypress(function(){
    if (!started) {

        //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
      }
})
$(".btn").click(function() {
    let userChosenColor =$(this).attr("id");
    userClickedPattern.push(userChosenColor);
    console.log(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(level);
    // nextSequence;
})
function nextSequence(){
    console.log(level);
    userClickedPattern.length =0;
    gamePattern.length =0;
    level=level+1;
    $("#level-title").text("Level " + level);
    for (let i=0;i<level;i++){
            randomNumber =Math.floor(Math.random()*4);
            randomChosenColour = colors[randomNumber];
            gamePattern.push(randomChosenColour);
    }
    for (let j=0;j<gamePattern.length;j++){
            $("#" + gamePattern[j]).fadeOut(500).fadeIn(500);
            playSound(gamePattern[j]);
    }
    // level++;
}

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}
function animatePress(currentColor){
    $("#" + currentColor).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}
function checkAnswer(currentLevel){
    console.log();
    let flag =true;
    for (let i=0;i<currentLevel;i++){
        if(userClickedPattern.length>= currentLevel){
            if(userClickedPattern[userClickedPattern.length-1-i] == gamePattern[i]){
                
            }
            else{
                flag =false;
                break;
            }
        }
        else{
            if (!(userClickedPattern.length< currentLevel)){
                flag=false;
                break;
            }
        }
    }
    console.log(flag);
    if(flag && userClickedPattern.length>= currentLevel){
        console.log("Success");
        setTimeout(function() {
            nextSequence();
        }, 1000);
    }
    else{
        if (!flag){var audio = new Audio("sounds/" + "wrong" + ".mp3");
        audio.play();
        $("body").addClass("game-over");
        setTimeout(function(){
        $("body").removeClass("game-over");
        },200);
        $("#level-title").text("Game Over, Press Any Key to Restart,Reached Level " + level);
        restartGame();}
    }
}
function restartGame(){
    started =false;
    level=0;
}