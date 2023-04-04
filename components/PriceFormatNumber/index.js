import React from 'react';

function PriceFormatNumber({ value }) {
    function formatNumberWithSpaces(number) {
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'decimal',
            currency: 'KZT',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
            useGrouping: true,
            currencyDisplay: 'symbol',
        });

        const formattedNumber = formatter.format(number).replace(/,/g, ' ');
        return formattedNumber;
    }
    const formattedValue = formatNumberWithSpaces(value);

    return <span>{formattedValue}</span>;
}

export default PriceFormatNumber;