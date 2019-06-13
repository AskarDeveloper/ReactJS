import {employersNames} from './employers';
import {sponsors, money}from './sponsors';

class MakeBusines {
    constructor(owner, director = 'Victor', cash, emp) {
        this.owner = owner;
        this.director = director;
        this.cash = cash;
        this.emp = emp;
    }
    log() {
        let sumSponsors = `${sponsors.eu.join(' ')} ${sponsors.rus.join(' ')} unexpected sponsor`;
        console.log(`We have a business. Owner: ${this.owner}, director: ${this.director}. Our budget: ${this.cash}. And our employers: ${this.emp}`);
        console.log('And we have a sponsors: ');
        console.log(sumSponsors);
        console.log(`Note. Be careful with ${sponsors.eu[0]}. It's a huge risk.`);
    }
}

const makeBusiness = new MakeBusines('Sam', undefined, money, employersNames);
makeBusiness.log();