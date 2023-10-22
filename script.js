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

let average_change = 0;
for (let i=0; i < arrayOfMoney.length; i++) {
    average_change = average_change + arrayOfMoney[i];
}
average_change = average_change / (finances.length - 1);
average_change = average_change.toFixed(2);
console.log("Average Change: " + average_change);

let greatest_increase = 0;
let greatest_decrease = 0;
let month_of_greatest_increase;
let month_of_greatest_decrease;

for (let i=0; i < finances.length - 1; i++) {
    if (finances[i+1][1] - finances[i][1] > greatest_increase) {
        greatest_increase = finances[i+1][1] - finances[i][1];
        month_of_greatest_increase = finances[i+1][0];
    }
    if (finances[i+1][1] - finances[i][1] < greatest_decrease) {
        greatest_decrease = finances[i+1][1] - finances[i][1];
        month_of_greatest_decrease = finances[i+1][0];
    }
}

console.log('Greatest Increase in Profits/Losses: ' + month_of_greatest_increase + ' ($' + greatest_increase + ')');
console.log('Greatest Decrease in Profits/Losses: ' + month_of_greatest_decrease + ' ($' + greatest_decrease + ')');