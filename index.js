const Ribbons = require('./src/ribbons');

const ribbons = new Ribbons([
    '62.0.4..8..',
    '62101411811',
    '62.0.4..8..',
    '65505555855',
    '63303433833',
    '62.0.4..8..',
    '77707777877',
    '62.0.4..8..',
    '99909999999',
    '62.0.4..8..',
    '62.0.4..8..'
]);

/* eslint-disable no-console */
console.log('\n');
ribbons.render();
console.log('\n\nThe order for this is:', ribbons.getRibbonOrder(), '\n\n');
