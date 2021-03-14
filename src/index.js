
module.exports = function toReadable(number) {
    let ones = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    let teens = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];



    if (number == 0) { return "zero";}
    let result = "";

    if (number > 99) {
        result += ones[Math.floor(number / 100)] + " hundred ";
    }
    number = number % 100;

    if (number > 19) {
        result += tens[Math.floor(number / 10)] + " ";
        number = number % 10;

    } else if (number >= 10) {
        result += teens[number - 10] + " ";
        number = 0;
    }
    result += ones[number];
    
    return result.trim();

  
};
