const anyValue = prompt ("Введите значение");
let anyAnswer = +anyValue;
let isAnswer = typeof (anyAnswer);
let answer = anyAnswer % 2;
if (isNan(anyAnswer)) {
    console.log("Упс, кажется вы ошиблись");
}
else if (anyAnswer == "0") {
    console.log("Введите значение");
}
else {
    if (isAnswer = "number" && res == 0) {
        console.log("Введите число четное")
    }
    else if (isAnswer = "number") {
    console.log("Введите число нечетное")
    }
}
