player1_name=localStorage.getItem("player_1");
player2_name=localStorage.getItem("player_2");

player1_score=0;
player2_score=0;

document.getElementById("player1_").innerHTML=player1_name+":";
document.getElementById("player2_name").innerHTML=player2_name+":";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question turn:"+player1_name;
document.getElementById("player_answer").innerHTML="Question turn:"+player2_name;

function send(){
   number1=document.getElementById("number_1").value;
   number2=document.getElementById("number_2").value;
   actual_answer=parseInt(number1)*parseInt(number2);
   
   question=number1+" x "+number2;
   answer_input="<br><input id='answer' class='form-control' placeholder='Your Answer'";
    check="<br><br><button class='btn btn-success' id='check' onclick='check()'>Check</button>";
row=question+answer_input+check;
document.getElementById("output").innerHTML=row;

document.getElementById("number_1").value="";
document.getElementById("number_2").value="";
}