module.exports = function toReadable(number) {
    let numberToString = String(number);
    let numberArray = numberToString.split("");
    let oneToNineteen = {
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
        return oneToNineteen[number];
    } else if (numberToString.length === 2 && number % 10 === 0) {
        return dozens[numberArray[0]];
    } else if (number > 20 && number < 100) {
        return `${dozens[numberArray[0]]} ${oneToNineteen[numberArray[1]]}`;
    } else if (numberToString.length === 3 && numberToString.endsWith("00")) {
        return `${oneToNineteen[numberArray[0]]} hundred`;
    } else if (numberToString.length === 3 && numberArray[1] === "0" && numberArray[2] != "0") {
        return `${oneToNineteen[numberArray[0]]} hundred ${oneToNineteen[numberArray[2]]}`;
    } else if (numberToString.length === 3 && Number(numberToString.slice(-2)) >= 10 && Number(numberToString.slice(-2)) < 20) {
        return `${oneToNineteen[numberArray[0]]} hundred ${oneToNineteen[numberToString.slice(-2)]}`
    } else if (numberToString.length === 3 && numberArray[1] != "0" && numberArray[1] != "1" && numberArray[2] === "0") {
        return `${oneToNineteen[numberArray[0]]} hundred ${dozens[numberArray[1]]}`
    } else if (numberToString.length === 3 && !numberToString.endsWith("00")) {
        return `${oneToNineteen[numberArray[0]]} hundred ${dozens[numberArray[1]]} ${oneToNineteen[numberArray[2]]}`;
    }
};
