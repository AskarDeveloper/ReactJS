const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

let employersNames = employers.filter((name) => name.length > 1);
employersNames = employersNames.map((item) => item.toLowerCase().trim());

export {employersNames};