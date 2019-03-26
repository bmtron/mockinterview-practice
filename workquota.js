

function percentToQuota(rev, year) {
    let userQuota= quota(year);
    return Math.floor((rev / userQuota) * 100);
}

function quota(year) {
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

function monthlyCommission(percent) {
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

let per = percentToQuota(4350, 1);

function dollarsPerDay(goal, totRev, year, time) {
    let h = quota(year);
    console.log(`Your current payout is ${monthlyCommission(percentToQuota(totRev, year))}.`);

    let target = goal;

    let diff = target - totRev;
    

    console.log(`You need an additional $${diff} to reach your goal of $${target}.`);

    console.log(`Your payout if you hit your target will be $${monthlyCommission(percentToQuota(target, year))}`);

    let remDay = time; 

    let perDay = Math.floor(diff / remDay);

    console.log(`You need to sell $${perDay} of rev per day for the rest of the month to reach your goal.`);


}

function fiscalMonth() {
    let today = new Date();

    if (today.getDay() > 21) {
        let daysLeft = today.getMonth();
    }
}

let goal = dollarsPerDay(9000, 4500, 1, 13);

console.log(goal);