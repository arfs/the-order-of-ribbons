class Ribbons {
    constructor(ribbonTable) {
        this.TABLE_SIZE = ribbonTable.length;
        this.ribbonTable = ribbonTable;
        this.isFilledWithRibbon = Ribbons.isFilledWithRibbon;
    }

    getRibbonOrder() {
        let topmostRowIndex = this.getTopmostRibbonRow();
        let topmostColumnIndex = this.getTopmostRibbonColumn();
        let order = '';

        while((topmostRowIndex > -1) || (topmostColumnIndex > -1)) {
            if(topmostRowIndex > -1) {
                order = this.ribbonTable[topmostRowIndex].charAt(0) + order;
                this.popRibbonRow(topmostRowIndex);
            }
            else {
                order = this.ribbonTable[0].charAt(topmostColumnIndex) + order;
                this.popRibbonColumn(topmostColumnIndex);
            }

            topmostRowIndex = this.getTopmostRibbonRow();
            topmostColumnIndex = this.getTopmostRibbonColumn();
        }

        return order;
    }

    getTopmostRibbonRow() {
        let rowIndex = -1;

        for(let i=0; i < this.ribbonTable.length; ++i) {
            let row = this.ribbonTable[i];

            if(this.isFilledWithRibbon(row)) {
                rowIndex = i;
                break;
            }
        }

        return rowIndex;
    }

    popRibbonRow(rowIndex) {
        let adjacentRowAbove = rowIndex - 1;
        let adjacentRowBelow = rowIndex + 1;
        let rowStr = this.ribbonTable[rowIndex];
        let newStr = '';

        for(let i=0; i < rowStr.length; ++i) {
            let charAbove = '';
            let charBelow = '';

            if(this.ribbonTable[adjacentRowAbove]) {
                charAbove = this.ribbonTable[adjacentRowAbove][i];
            }

            if(this.ribbonTable[adjacentRowBelow]) {
                charBelow = this.ribbonTable[adjacentRowBelow][i];
            }

            if(charAbove === charBelow) {
                newStr += charAbove;
            }
            else {
                newStr += (charAbove || charBelow);
            }
        }

        this.ribbonTable[rowIndex] = newStr;
    }

    getTopmostRibbonColumn() {
        let result = -1;

        for(let colIndex=this.TABLE_SIZE; colIndex >= 0; --colIndex) {
            let colStr = '';

            for(let rowIndex=0; rowIndex < this.TABLE_SIZE; ++rowIndex) {
                colStr += this.ribbonTable[rowIndex][colIndex];
            }

            if(this.isFilledWithRibbon(colStr)) {
                return colIndex;
            }
        }

        return result;
    }

    popRibbonColumn(colIndex) {
        for(let i=0; i < this.ribbonTable.length; ++i) {
            let rowStr = this.ribbonTable[i];
            let charLeft = rowStr.charAt(colIndex - 1) || rowStr.charAt(this.TABLE_SIZE - 1);
            let charRight = rowStr.charAt(colIndex + 1) || rowStr.charAt(0);

            if(charLeft === charRight) {
                this.ribbonTable[i] = rowStr.substr(0, colIndex) + charLeft + rowStr.substr(colIndex + 1);
            }
            else {
                let newChar = (charLeft || charRight);
                this.ribbonTable[i] = rowStr.substr(0, colIndex) + newChar + rowStr.substr(colIndex + 1);
            }
        }
    }

    static isFilledWithRibbon(str) {
        let result = false;
        let char = str.charAt(0);

        if((char !== '.') && (str === char.repeat(str.length))) {
            result = true;
        }

        return result;
    }

    getTable() {
        return this.ribbonTable;
    }

    render(table) {
        table = table || this.ribbonTable;

        table.forEach((row) => {
            /* eslint-disable no-console */
            console.log(row);
        });
    }
}

module.exports = Ribbons;
