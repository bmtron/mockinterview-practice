

function percentToQuota(rev, year) { //calculates your percentage to quota attainment and takes two arguments, your current revenue and how many years youve been with the company
    let userQuota= quota(year);
    return Math.floor((rev / userQuota) * 100);
}

function quota(year) { //determines what your quota is based on the argument passed in, years youve been with the company
    let quota = 0;
    
    if (year <= 1) {
        quota = 8400;
        return quota;
    }
    else {
        quota = 9400;
        return quota;
    }
}

function monthlyCommission(percent) { //calculates current projected commission payout based on current attainment percentage as calculated in percentToQuota function
    let payout = 0;
    if (percent < 70) {
        payout = percent * 11.90;
    }
    else if (percent > 70 && percent < 100) {
        payout = 833.33 + (27.78 * percent); 
    }
    else {
        payout = 1666 + (percent - 100) * 41.67;
    }
    return Math.floor(payout);
}

function dollarsPerDay(goal, totRev, year) { //calculates how many dollars per day are needed to achieve revenue goal based on current day in the fiscal month

    console.log(`Your current payout is $${monthlyCommission(percentToQuota(totRev, year))}.`);

    let target = goal;

    let diff = target - totRev;
    

    console.log(`You need an additional $${diff} to reach your goal of $${target}.`);

    console.log(`Your payout if you hit your target will be $${monthlyCommission(percentToQuota(target, year))}`);

    let perDay = diff / fiscalMonth();

    console.log(`You need to sell $${perDay} of rev per day for the rest of the month to reach your goal.`);

}

function fiscalMonth() { //calculates how many days are left in the fiscal month
    let today = new Date();

    let fiscEnd = new Date(today.getFullYear(), today.getMonth() + 1, 21);
   
    let daysLeft = fiscEnd - today;
    daysLeft = Math.floor(daysLeft / 24 / 60 / 60 / 1000);
    

    return daysLeft;
}
function goalPercent(percent, year) { //used to replace straight dollar value input for goal as a percentage of quota attainment
    let q = quota(year);
    let p = percent / 100;

    return q * p;
}
let goal = dollarsPerDay(goalPercent(227, 2), 1250, 1);