console.log("Financial Analysis");
console.log("----------------");
console.log("Total Months: " + finances.length);

let total = 0;

for (let i=0; i < finances.length; i++) {
    total = total + finances[i][1];
}

console.log("Total: $" + total);