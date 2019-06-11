const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

let employersNames = employers.filter((name) => name.length > 1);
employersNames = employersNames.map((item) => item.toLowerCase().trim());

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

const makeBusiness = ({
    owner,
    director = 'Victor',
    cash,
    emp
}) => {
    let sumSponsors = `${sponsors.eu.join(' ')} ${sponsors.rus.join(' ')} unexpected sponsor`;
    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp}`);
    console.log('And we have a sponsors: ');
    console.log(sumSponsors);
    console.log(`Note. Be careful with ${sponsors.eu[0]}. It's a huge risk.`);
};

makeBusiness({
    owner: 'Sam', 
    director: undefined, 
    cash: money, 
    emp: employersNames
});