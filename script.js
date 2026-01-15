document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("number");
    const button = document.getElementById("convert-btn");
    const output = document.getElementById("output");

    button.addEventListener("click", () => {
        const value = parseInt(input.value);

        if (isNaN(value)) {
            output.textContent = "Please enter a valid number";
            return;
        }

        if (value < 1) {
            output.textContent = "Please enter a number ≥ 1";
            return;
        }

        if (value > 3999) {
            output.textContent = "Please enter a number ≤ 3999";
            return;
        }

        output.textContent = convertToRoman(value);
    });
});

function convertToRoman(num) {
    const map = [
        { value: 1000, numeral: "M" },
        { value: 900, numeral: "CM" },
        { value: 500, numeral: "D" },
        { value: 400, numeral: "CD" },
        { value: 100, numeral: "C" },
        { value: 90, numeral: "XC" },
        { value: 50, numeral: "L" },
        { value: 40, numeral: "XL" },
        { value: 10, numeral: "X" },
        { value: 9, numeral: "IX" },
        { value: 5, numeral: "V" },
        { value: 4, numeral: "IV" },
        { value: 1, numeral: "I" }
    ];

    let result = "";

    for (const item of map) {
        while (num >= item.value) {
            result += item.numeral;
            num -= item.value;
        }
    }

    return result;
}
