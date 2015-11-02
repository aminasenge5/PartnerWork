//write JS code for homework guessing game
//
//establish that 'addict' will change as questions are answered
//
//asking questions
//
var myconsole=document.getElementById("myconsole");
function mylog(v){
    myconsole.innerHTML += (v + "<br>");
}

function answers1() {

        addict=0;

        var answer1=prompt("Are you an addict?");

        if (answer1=="yes")

        { alert("Thanks for your honesty! Press ok to procced to the next question..");

        addict=addict+1;

    }

    else {alert ("Next Question..");}
    }


function answers2() {

    var answer2=prompt("Were you an addict?");

    if (answer2=="yes")

        { alert("Thanks for your honesty! Press ok to proceed to the next question..");

        addict=addict+1;}

    else {alert ("Next Question..");}
    }


function answers3() {
    var answer3=prompt ("Do you know an addict?");

    if (answer3=="yes")

        { alert("Thanks for your honesty! Press OK to finish the survey..");

        addict=addict+1;

    }

    else {alert ("Thank you! Press OK to finish the survey..");}
    
    
    alert("Thank you for taking the survey. Press 'OK' to return to the main page.")}
answers1();
answers2();
answers3();