// Print all numbers from 1 to 10 using a for loop ;

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// print the numbers 10 to 1 using the while loop ;
let i=10;
while(i!=0){
    console.log(i);
    i--;
}
console.log("Exit");

//Print the even number from 1 to 20 using a for loop 
for (let i = 1; i <= 20; i++) {
    if (i%2==0){
        console.log(i);
    }
}

//Print the odd number from 1 to 20 using a for loop 
for (let i = 1; i <= 20; i++) {
    if (i%2==1){
        console.log(i);
    }
}

//print the multiplication table of 5
let i=1;
let n=5;
while(i!=11){
    console.log(n*i);
    i++
}
console.log("Exit");

//find the sum of number 1 to 100;
let i=1;
let sum=0;
while(i!=101){
    sum = sum+i;
    i++;
}
console.log(sum);

//S= n(n+1)/2​ --> this is the formule

//print all number between 1 to 50 that are divisible by 3
for (let i=0; i<=50; i++ ){
    if (i%3==0){
        console.log(i);
    }
}
console.log("loop terminated ");