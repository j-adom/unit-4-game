var randGoal = Math.floor(Math.random() * 101 + 20)
var rand1 = Math.floor(Math.random() * 12 + 1);
var rand2 = Math.floor(Math.random() * 12 + 1);
var rand3 = Math.floor(Math.random() * 12 + 1);
var rand4 = Math.floor(Math.random() * 12 + 1);
var userScore = 0;
var winCount = 0;
var lossCount = 0;


$('#target').html("<h1>Target: "+randGoal+"</h1>");
$('#total-score').html("<h1>Score:"+userScore+"</h1>");

function newGame(){
    randGoal = Math.floor(Math.random() * 101 + 20)
    rand1 = Math.floor(Math.random() * 12 + 1);
    rand2 = Math.floor(Math.random() * 12 + 1);
    rand3 = Math.floor(Math.random() * 12 + 1);
    rand4 = Math.floor(Math.random() * 12 + 1);

    userScore = 0;
    $('#end-game').html("<h1></h1>")
    $('#total-score').html("<h1>0</h1>")
    $('#target').html("<h1>Target: "+randGoal+"</h1>");
    $('#total-score').html("<h1>Score:"+userScore+"</h1>");
       
}

function endGame(){
    if(userScore>randGoal){
        lossCount++
        $('#end-game').html("<h1>Bust! You Lose!</h1>") 
        $('#loss-count').html(lossCount)    
    } else if(userScore===randGoal){
        winCount++
        $('#end-game').html("<h1>It's a match!<br>You Win!!!</h1>")    
        $('#win-count').html(winCount) 
    }
}

$(".button1").click( function() {
    userScore += rand1
    $('#total-score').html("<h1>Score:"+userScore+"</h1>")
    endGame()
})

$(".button2").click( function() {
    userScore += rand2
    $('#total-score').html("<h1>Score: "+userScore+"</h1>")
    endGame()
})

$(".button3").click( function() {
    userScore += rand3
    $('#total-score').html("<h1>Score:"+userScore+"</h1>")
    endGame()
})

$(".button4").click( function() {
    userScore += rand4
    $('#total-score').html("<h1>Score:"+userScore+"</h1>")
    endGame()
})

$("#startOver").click( function (){
    newGame()
})