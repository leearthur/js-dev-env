import './site.css';
import numeral from 'numeral';

const courseValue = numeral(1000).format('0,0.00');
console.log(`Hello World: Current Value: ${courseValue}.`);
