module.exports = function toReadable(number) {
    let numberToString = String(number);
    let numberToArray = numberToString.split("");
    let oneTotwenty = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
    };

    let dozens = {
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
    };

    if (number >= 0 && number < 21) {
        return oneTotwenty[number];
    } else if (numberToString.length === 2 && number % 10 === 0) {
        return dozens[numberToArray[0]];
    } else if (number > 20 && number < 100) {
        return `${dozens[numberToArray[0]]} ${oneTotwenty[numberToArray[1]]}`;
    } else if (numberToString.length === 3 && numberToString.endsWith("00")) {
        return `${oneTotwenty[numberToArray[0]]} hundred`;
    } else if (numberToString.length === 3 && numberToArray[1] === "0" && numberToArray[2] != "0") {
        return `${oneTotwenty[numberToArray[0]]} hundred ${oneTotwenty[numberToArray[2]]}`;
    } else if (numberToString.length === 3 && Number(numberToString.slice(-2)) >= 10 && Number(numberToString.slice(-2)) < 20) {
        return `${oneTotwenty[numberToArray[0]]} hundred ${oneTotwenty[numberToString.slice(-2)]}`
    } else if (numberToString.length === 3 && numberToArray[1] != "0" && numberToArray[1] != "1" && numberToArray[2] === "0") {
        return `${oneTotwenty[numberToArray[0]]} hundred ${dozens[numberToArray[1]]}`
    } else if (numberToString.length === 3 && !numberToString.endsWith("00")) {
        return `${oneTotwenty[numberToArray[0]]} hundred ${dozens[numberToArray[1]]} ${oneTotwenty[numberToArray[2]]}`;
    }
};
