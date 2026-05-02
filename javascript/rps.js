// Rock Paper Scissors Game

// Array of possible choices
let choices = ["rock", "paper", "scissors"];

// Take user input (works in browser)
let userChoice = prompt("Enter rock, paper, or scissors:").toLowerCase();

// Generate computer choice randomly
let randomIndex = Math.floor(Math.random() * 3); // 0, 1, or 2
let computerChoice = choices[randomIndex];

// Display choices
console.log("You chose: " + userChoice);
console.log("Computer chose: " + computerChoice);

// Check if input is valid
if (!choices.includes(userChoice)) {
    console.log("Invalid input! Please enter rock, paper, or scissors.");
}

// Check for draw condition
else if (userChoice === computerChoice) {
    console.log("It's a draw!");
}

// Check all winning conditions for user
else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
) {
    console.log("You win!");
}

// If none of the above, computer wins
else {
    console.log("Computer wins!");
}