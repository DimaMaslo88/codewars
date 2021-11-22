function expressionMatter(a, b, c) {
    let result1 = a * b * c;
    let result2 = a + b + c;
    let result3 = (a + b) * c;
    let result4 = a * (b + c);

    let result5 = a * b + c;
    let result6 = a + b * c;
    let result7 = a * c + b;
    let array = [result1, result2, result3, result4,
        result5, result6, result7];
// console.log(array.sort());
    let result = Math.max(...array);
    return result;
}