console.log("Financial Analysis");
console.log("----------------");
console.log("Total Months: " + finances.length);

let total = 0;

for (let i=0; i < finances.length; i++) {
    total = total + finances[i][1];
}

console.log("Total: $" + total);

let arrayOfMoney = [];
for (let i=0; i < finances.length - 1; i++) {
    arrayOfMoney.push(finances[i+1][1] - finances[i][1])
}

let totalAmountOfMoney = 0;
for (let i=0; i < arrayOfMoney.length; i++) {
    totalAmountOfMoney = totalAmountOfMoney + arrayOfMoney[i];
}
totalAmountOfMoney = totalAmountOfMoney / (finances.length - 1);
totalAmountOfMoney = totalAmountOfMoney.toFixed(2);
console.log("Average Change: " + totalAmountOfMoney);