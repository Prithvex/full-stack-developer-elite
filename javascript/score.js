// Program to print grade based on marks

// Prompt the user to enter marks
// (Works in browser; for Node.js you’d use readline instead)
let marks = parseInt(prompt("Enter your marks (0 - 100):"));

// Check if input is valid
if (isNaN(marks) || marks < 0 || marks > 100) {
    console.log("Invalid marks entered!");
}

// Condition for A+ grade (90 - 100)
else if (marks >= 90) {
    console.log("Grade: A+");
}

// Condition for A grade (80 - 89)
else if (marks >= 80) {
    console.log("Grade: A");
}

// Condition for B grade (70 - 79)
else if (marks >= 70) {
    console.log("Grade: B");
}

// Condition for C grade (60 - 69)
else if (marks >= 60) {
    console.log("Grade: C");
}

// Condition for D grade (50 - 59)
else if (marks >= 50) {
    console.log("Grade: D");
}

// Condition for F grade (below 50)
else {
    console.log("Grade: F");
}
