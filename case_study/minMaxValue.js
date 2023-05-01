function minMaxValue(arrNumber) {
    minValue = Math.min(...arrNumber);
    maxValue = Math.max(...arrNumber);

    return {
        min: minValue,
        max: maxValue,
    };
}

console.log(minMaxValue([10, 3, 5, 12, 7]));
