const Ribbons = require('./ribbons');

describe('Ribbons tests', () => {
    it('should recognize that the string is filled with a pattern', function() {
        let ribbons = new Ribbons(new Array(11));
        expect(ribbons.isFilledWithRibbon('11111111111')).toBe(true);
    });

    it('should recognize that the string is NOT filled with a pattern', function() {
        let ribbons = new Ribbons(new Array(11));
        expect(ribbons.isFilledWithRibbon('11122111311')).toBe(false);
    });

    it('should recognize rowIndex 5 as the topmost ribbon row', function() {
        let table = [
            '...........',
            '...........',
            '...........',
            '...........',
            '...........',
            '11111111111',
            '...........',
            '...........',
            '...........',
            '...........',
            '...........'
        ];

        let ribbons = new Ribbons(table);
        let rowIndex = ribbons.getTopmostRibbonRow();

        expect(rowIndex).toBe(5);
    });

    it('should pop off topmost row pattern located in middle and fill in with empty spots', function() {
        let table = [
            '...........',
            '...........',
            '...........',
            '...........',
            '...........',
            '11111111111',
            '...........',
            '...........',
            '...........',
            '...........',
            '...........'
        ];

        let ribbons = new Ribbons(table);
        ribbons.popRibbonRow(5);

        expect(ribbons.getTable()).toEqual([
            '...........',
            '...........',
            '...........',
            '...........',
            '...........',
            '...........',
            '...........',
            '...........',
            '...........',
            '...........',
            '...........'
        ]);
    });

    it('should recognize there are NO topmost ribbon rows', function() {
        let table = [
            '.....1.....',
            '.....1.....',
            '.....1.....',
            '.....1.....',
            '.....1.....',
            '.....1.....',
            '.....1.....',
            '.....1.....',
            '.....1.....',
            '.....1.....',
            '.....1.....'
        ];

        let ribbons = new Ribbons(table);
        let rowIndex = ribbons.getTopmostRibbonRow();

        expect(rowIndex).toBe(-1);
    });

    it('should pop off topmost row pattern located at the top and fill in with empty spots', function() {
        let table = [
            '11111111111',
            '...........',
            '...........',
            '...........',
            '...........',
            '...........',
            '...........',
            '...........',
            '...........',
            '...........',
            '...........'
        ];

        let ribbons = new Ribbons(table);
        ribbons.popRibbonRow(0);

        expect(ribbons.getTable()).toEqual([
            '...........',
            '...........',
            '...........',
            '...........',
            '...........',
            '...........',
            '...........',
            '...........',
            '...........',
            '...........',
            '...........'
        ]);
    });

    it('should pop off topmost row pattern located at the bottom and fill in with empty spots', function() {
        let table = [
            '...........',
            '...........',
            '...........',
            '...........',
            '...........',
            '...........',
            '...........',
            '...........',
            '...........',
            '...........',
            '11111111111'
        ];

        let ribbons = new Ribbons(table);
        ribbons.popRibbonRow(10);

        expect(ribbons.getTable()).toEqual([
            '...........',
            '...........',
            '...........',
            '...........',
            '...........',
            '...........',
            '...........',
            '...........',
            '...........',
            '...........',
            '...........'
        ]);
    });

    it('should pop off topmost row pattern located in the middle and fill with correct adjacent pattern', function() {
        let table = [
            '1....2....3',
            '1....2....3',
            '1....2....3',
            '1....2....3',
            '1....2....3',
            '99999999999',
            '1....2....3',
            '1....2....3',
            '1....2....3',
            '1....2....3',
            '1....2....3',
        ];

        let ribbons = new Ribbons(table);
        ribbons.popRibbonRow(5);

        expect(ribbons.getTable()).toEqual([
            '1....2....3',
            '1....2....3',
            '1....2....3',
            '1....2....3',
            '1....2....3',
            '1....2....3',
            '1....2....3',
            '1....2....3',
            '1....2....3',
            '1....2....3',
            '1....2....3',
        ]);
    });

    it('should pop off topmost row pattern located at the top and fill with correct adjacent pattern', function() {
        let table = [
            '99999999999',
            '1....2....3',
            '1....2....3',
            '1....2....3',
            '1....2....3',
            '1....2....3',
            '1....2....3',
            '1....2....3',
            '1....2....3',
            '1....2....3',
            '1....2....3',
        ];

        let ribbons = new Ribbons(table);
        ribbons.popRibbonRow(0);

        expect(ribbons.getTable()).toEqual([
            '1....2....3',
            '1....2....3',
            '1....2....3',
            '1....2....3',
            '1....2....3',
            '1....2....3',
            '1....2....3',
            '1....2....3',
            '1....2....3',
            '1....2....3',
            '1....2....3',
        ]);
    });

    it('should pop off topmost row pattern located at the bottom and fill with correct adjacent pattern', function() {
        let table = [
            '1....2....3',
            '1....2....3',
            '1....2....3',
            '1....2....3',
            '1....2....3',
            '1....2....3',
            '1....2....3',
            '1....2....3',
            '1....2....3',
            '1....2....3',
            '99999999999'
        ];

        let ribbons = new Ribbons(table);
        ribbons.popRibbonRow(10);

        expect(ribbons.getTable()).toEqual([
            '1....2....3',
            '1....2....3',
            '1....2....3',
            '1....2....3',
            '1....2....3',
            '1....2....3',
            '1....2....3',
            '1....2....3',
            '1....2....3',
            '1....2....3',
            '1....2....3',
        ]);
    });

    it('should recognize colIndex 5 as the topmost ribbon column', function() {
        let table = [
            '.....1.....',
            '.....1.....',
            '.....1.....',
            '.....1.....',
            '.....1.....',
            '.....1.....',
            '.....1.....',
            '.....1.....',
            '.....1.....',
            '.....1.....',
            '.....1.....'
        ];

        let ribbons = new Ribbons(table);
        let colIndex = ribbons.getTopmostRibbonColumn();

        expect(colIndex).toBe(5);
    });

    it('should recognize there are NO topmost ribbon column', function() {
        let table = [
            '...........',
            '...........',
            '...........',
            '...........',
            '...........',
            '55555555555',
            '...........',
            '...........',
            '...........',
            '...........',
            '...........'
        ];

        let ribbons = new Ribbons(table);
        let colIndex = ribbons.getTopmostRibbonColumn();

        expect(colIndex).toBe(-1);
    });

    it('should pop off topmost column pattern located in middle and fill in with empty spots', function() {
        let table = [
            '.....1.....',
            '.....1.....',
            '.....1.....',
            '.....1.....',
            '.....1.....',
            '.....1.....',
            '.....1.....',
            '.....1.....',
            '.....1.....',
            '.....1.....',
            '.....1.....'
        ];

        let ribbons = new Ribbons(table);
        ribbons.popRibbonColumn(5);

        expect(ribbons.getTable()).toEqual([
            '...........',
            '...........',
            '...........',
            '...........',
            '...........',
            '...........',
            '...........',
            '...........',
            '...........',
            '...........',
            '...........'
        ]);
    });

    it('should pop off topmost column pattern located at the left and fill in with empty spots', function() {
        let table = [
            '1..........',
            '1..........',
            '1..........',
            '1..........',
            '1..........',
            '1..........',
            '1..........',
            '1..........',
            '1..........',
            '1..........',
            '1..........'
        ];

        let ribbons = new Ribbons(table);
        ribbons.popRibbonColumn(0);

        expect(ribbons.getTable()).toEqual([
            '...........',
            '...........',
            '...........',
            '...........',
            '...........',
            '...........',
            '...........',
            '...........',
            '...........',
            '...........',
            '...........'
        ]);
    });

    it('should pop off topmost column pattern located at the right and fill in with empty spots', function() {
        let table = [
            '..........1',
            '..........1',
            '..........1',
            '..........1',
            '..........1',
            '..........1',
            '..........1',
            '..........1',
            '..........1',
            '..........1',
            '..........1'
        ];

        let ribbons = new Ribbons(table);
        ribbons.popRibbonColumn(10);

        expect(ribbons.getTable()).toEqual([
            '...........',
            '...........',
            '...........',
            '...........',
            '...........',
            '...........',
            '...........',
            '...........',
            '...........',
            '...........',
            '...........'
        ]);
    });

    it('should pop off topmost column pattern located in the middle and fill with correct adjacent pattern', function() {
        let table = [
            '11111911111',
            '.....9.....',
            '.....9.....',
            '.....9.....',
            '.....9.....',
            '22222922222',
            '.....9.....',
            '.....9.....',
            '.....9.....',
            '.....9.....',
            '33333933333',
        ];

        let ribbons = new Ribbons(table);
        ribbons.popRibbonColumn(5);

        expect(ribbons.getTable()).toEqual([
            '11111111111',
            '...........',
            '...........',
            '...........',
            '...........',
            '22222222222',
            '...........',
            '...........',
            '...........',
            '...........',
            '33333333333',
        ]);
    });

    it('should pop off topmost column pattern located at the left and fill with correct adjacent pattern', function() {
        let table = [
            '91111111111',
            '9..........',
            '9..........',
            '9..........',
            '9..........',
            '92222222222',
            '9..........',
            '9..........',
            '9..........',
            '9..........',
            '93333333333',
        ];

        let ribbons = new Ribbons(table);
        ribbons.popRibbonColumn(0);

        expect(ribbons.getTable()).toEqual([
            '11111111111',
            '...........',
            '...........',
            '...........',
            '...........',
            '22222222222',
            '...........',
            '...........',
            '...........',
            '...........',
            '33333333333',
        ]);
    });

    it('should pop off topmost column pattern located at the right and fill with correct adjacent pattern', function() {
        let table = [
            '11111111119',
            '..........9',
            '..........9',
            '..........9',
            '..........9',
            '22222222229',
            '..........9',
            '..........9',
            '..........9',
            '..........9',
            '33333333339',
        ];

        let ribbons = new Ribbons(table);
        ribbons.popRibbonColumn(10);

        expect(ribbons.getTable()).toEqual([
            '11111111111',
            '...........',
            '...........',
            '...........',
            '...........',
            '22222222222',
            '...........',
            '...........',
            '...........',
            '...........',
            '33333333333',
        ]);
    });

    /* added this test after finding a bug while trying to run the test for the full code kata problem */
    it('should fill in column correct when there is an adjacent parallel ribbon', function() {
        let table = [
            '62...4.....',
            '62111411111',
            '62...4.....',
            '65555555555',
            '63333433333',
            '62...4.....',
            '62...4.....',
            '62...4.....',
            '62...4.....',
            '62...4.....',
            '62...4.....'
        ];

        let ribbons = new Ribbons(table);
        ribbons.popRibbonColumn(0);

        expect(ribbons.getTable()).toEqual([
            '.2...4.....',
            '12111411111',
            '.2...4.....',
            '55555555555',
            '33333433333',
            '.2...4.....',
            '.2...4.....',
            '.2...4.....',
            '.2...4.....',
            '.2...4.....',
            '.2...4.....'
        ]);
    });

    it('should return correct ribbon order', function() {
        let table = [
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
        ];

        let ribbons = new Ribbons(table);
        expect(ribbons.getRibbonOrder()).toBe('1234567890');
    });
});
