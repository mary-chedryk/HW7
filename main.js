//Task 1
const numbers = [3,7,15];
numbers[1] = 10;

console.log(numbers);

//Task 2
const rows = [
    ["Row 1"],
    ["Row 2"],
    ["Row 3"], 
]

rows.push("Row 4");

console.log(rows);

//Task 3
 let sum = 6;
 let sum2 = 5;
 let sum3 = 3;
 console.log(sum + sum2 + sum3);

 //Task 4
let separate = [10, 20, 30, 40, 50];

for (let i = 0; i < separate.length; i++) {
    console.log(separate[i]);
}

//Task 5
let strings = ["C++", "Java", "JavaScript", "Puthon", "PHP"];

for (let i = 0; i < strings.length; i++) {
    if (strings[i].length > 5) {
        console.log(strings[i]);
    }
}

//Task 6
let max = [12, 34, 7, 56, 89, 2, 45, 78, 99, 33];

let maxNumber = Math.max(...max);

console.log("Максимальне значення в масиві:", maxNumber);

//Task 7
let even = [12, 34, 7, 56, 89, 2, 45, 78, 99, 33];

for (let i = 0; i < even.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(even[i]);  
    }
}


