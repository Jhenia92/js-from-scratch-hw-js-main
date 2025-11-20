// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае

function isEven(meaning) {
    meaning=Math.abs(meaning);
    if (meaning % 2 === 1) {
        return false;
    } else {
        return true;
    }
}

console.log(isEven(-1))