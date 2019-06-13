const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

const calcCash = (own = 0, cash) => {
    const sum = cash.reduce((a, b) => a + b);
    let total = own;
    total += +sum;
    return total;
};

const money = calcCash(undefined, sponsors.cash);

export {sponsors, money};