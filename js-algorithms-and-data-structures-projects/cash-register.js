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

let currencyUnits = [{
        name: "ONE HUNDRED",
        value: 100.00
    },
    {
        name: "TWENTY",
        value: 20.00
    },
    {
        name: "TEN",
        value: 10.00
    },
    {
        name: "FIVE",
        value: 5.00
    },
    {
        name: "ONE",
        value: 1.00
    },
    {
        name: "QUARTER",
        value: 0.25
    },
    {
        name: "DIME",
        value: 0.10
    },
    {
        name: "NICKEL",
        value: 0.05
    },
    {
        name: "PENNY",
        value: 0.01
    }
];

function checkCashRegister(price, cash, cid) {
    let change = cash - price;
    let totalCashInDrawer = 0;

    for (let i = 0; i < cid.length; i++) {
        totalCashInDrawer += cid[i][1];
    }

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
    let output = currencyUnits.reduce(function (accumulator, next, index) {
        let currentValue = 0.0;
        while (change >= next.value && cid[index][1] > 0) {
            change -= next.value;
            cid[index][1] -= next.value;
            currentValue += next.value;

            change = Math.round(change * 100) / 100;

        }
        if (currentValue > 0) {
            accumulator.push([next.name, currentValue]);
        }
        return accumulator;
    }, []);

    console.log("output: " + output);

    if (output.length < 1 || change > 0) {
        return {
            status: "INSUFFICIENT_FUNDS",
            change: []
        };
    }

    // Here is your change, ma'am.
    return {
        status: "OPEN",
        change: output
    };
}

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