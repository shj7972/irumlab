
const lunisolar = require('lunisolar');

const date = new Date('2024-01-01T12:00:00');
const ls = lunisolar(date);

console.log('Date:', date.toString());
console.log('Lunisolar Object:', ls);
console.log('Char8:', ls.char8);

if (ls.char8) {
    console.log('Year Object:', ls.char8.year);
    console.log('Year Gan (stem):', ls.char8.year.stem); // Accessing getter?
    console.log('Year Zhi (branch):', ls.char8.year.branch);
} else {
    console.log('ls.char8 is undefined');
}
