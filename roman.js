const romanNumerals = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];

const values = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000]

let number = prompt('Number:')

const isFloat = (n) => {
    if (n % 1 == 0) {
        return false
    }
    return true
}
if (isNaN(number) || isFloat(number)) {
    alert('I asked for a number, not gibberish!')
}
else {
    let text = '';
    for (i = values.length - 1; i >= 0; i = i - 1) {
        let count = 0
        while (values[i] <= number) {
            number = number - values[i]
            count++;
        }
        text = text + (romanNumerals[i]).repeat(count);
    }
    alert(text)
}