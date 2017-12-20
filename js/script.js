//Class 1:  +check+
        // Fork and clone the repo and set up your project workspace and link files
        // Write HTML for your project
//Class 2:  
        // Declare four global variables for intial state of the list of choices, the computer choice, the user choice, and the winner.  
        // Practice using console.log() and debugger to debug your code
        // Create your document ready function. 
        // Create a click hander for when the "Shoot!" button is clicked, takes in the user choice from the input field, 
        // Display the user choice to the output screen
//Class 3:  
        // Randomly choose among 'rock', 'paper', or 'scissors' from the list of choices 
        // Display the computer choice to the output screen
        // Compare the user choice and the computer choice to determine who won. 
        // Display the user winner to the output screen 
        // Clear the input box for the next choice

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES



//FUNCTIONS
var CPUchoices = [ "rock" , "paper" , "scissors" ];

var Player1choices = [ "rock" , "paper" , "scissors" ];
//console.log(CPUchoices.length);
//console.log(Player1choices.length);

function CPUchooses(){
        return CPUchoices[Math.floor(Math.random()*3)];
}
console.log(CPUchooses());

function Player1chooses(){
        return Player1choices[Math.floor(Math.random()*3)];
}
console.log(Player1chooses());

var W = "YOU WIN!"
var L = "YOU LOST"
var T = "TIE!"
if ( Player1chooses === CPUchooses){
        console.log(T)
}
else{
        console.log(" :/ ")
}



// DOCUMENT READY FUNCTION

