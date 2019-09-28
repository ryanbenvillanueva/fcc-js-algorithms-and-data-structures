// JavaScript Algorithms and Data Structures Projects: Cash Register
// Design a cash register drawer function checkCashRegister()that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

// cidis a 2D array listing available currency.

// The checkCashRegister()function should always return an object with a statuskey and a changekey.

// Return {status: "INSUFFICIENT_FUNDS", change: []}if cash-in-drawer is less than the change due, or if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]}with cash-in-drawer as the value for the key changeif it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the changekey.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

// Currency Unit	Amount
// Penny	$0.01 (PENNY)
// Nickel	$0.05 (NICKEL)
// Dime	$0.1 (DIME)
// Quarter	$0.25 (QUARTER)
// Dollar	$1 (DOLLAR)
// Five Dollars	$5 (FIVE)
// Ten Dollars	$10 (TEN)
// Twenty Dollars	$20 (TWENTY)
// One-hundred Dollars	$100 (ONE HUNDRED)

// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])should return an object.
// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])should return {status: "OPEN", change: [["QUARTER", 0.5]]}.
// checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])should return {status: "INSUFFICIENT_FUNDS", change: []}.
// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])should return {status: "INSUFFICIENT_FUNDS", change: []}.
// checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.

const currencyUnits = [{
        name: 'ONE HUNDRED',
        amount: 100.00
    },
    {
        name: 'TWENTY',
        amount: 20.00
    },
    {
        name: 'TEN',
        amount: 10.00
    },
    {
        name: 'FIVE',
        amount: 5.00
    },
    {
        name: 'ONE',
        amount: 1.00
    },
    {
        name: 'QUARTER',
        amount: 0.25
    },
    {
        name: 'DIME',
        amount: 0.10
    },
    {
        name: 'NICKEL',
        amount: 0.05
    },
    {
        name: 'PENNY',
        amount: 0.01
    }
];

function checkCashRegister(price, cash, cid) {
    const change = cash - price;
    const totalCashInDrawer = cid.reduce((accumulator, currentValue) => accumulator + currentValue[i][1], 0.0);
    
    if (totalCashInDrawer < change) {
        return {
            status: "INSUFFICIENT_FUNDS",
            change: []
        };
    } else if (totalCashInDrawer === change) {
        return {
            status: "CLOSED",
            change: [...cid]
        };
    }

    cid = cid.reverse();
    let  changeResult = currencyUnits.reduce(function(accumulator, currentValue, index) {
        if (change >= currentValue.amount) {
            let totalAmount = 0.0;
            while (change > currentValue.amount && cid[index][i][1] >= currentValue.amount) {
                totalAmount += currentValue.amount;
                change -= currentValue.amount;
                change = Math.round(change * 100) / 100;
                cid[index[i]] -= currentValue.amount;
            } 
            accumulator.push([currentValue.name, totalAmount]);
            return accumulator;
        } else {
            return accumulator;
        }
    }, []);

    // Here is your change, ma'am.
    return change;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
]);