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


// these questions determine if the user has an active addiction
function answers1() {

        addict=0;

        var answer1=prompt("Are you an addict?");

        if (answer1==="yes" || answer1=== "YES" || answer1=== "y" || answer1=== "Yes")

        { alert("Thanks for your honesty! Press ok to procced to the next question..");

        addict=addict+1;

    }

    else {alert ("Next Question..");}



//this command records the number of 'yes' answers, only 'yes' answers are being recorded

    console.log(answer1);}


//this question determines if the user has a previous history of addiction
//
//
function answers2() {

    var answer2=prompt("Were you an addict?");

        if (answer2==="yes" || answer2=== "YES" || answer2=== "y" || answer2=== "Yes")

        { alert("Thanks for your honesty! Press ok to proceed to the next question..");

        addict=addict+1;}

    else {alert ("Next Question..");}
 

    console.log(answer2);}


//this question determines if the user is familiar with others in addiction

function answers3() {
    var answer3=prompt ("Do you know an addict?");

        if (answer3==="yes" || answer3=== "YES" || answer3=== "y" || answer3=== "Yes")
            
        { alert("Thanks for your honesty! Press OK to finish the survey..");

        addict=addict+1;

    }

    else {alert ("Thank you! Press OK to finish the survey..");}
    
    
    alert("Thank you for taking the survey. Press 'OK' to return to the main page.")}
answers1();
answers2();
answers3();