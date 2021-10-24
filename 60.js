function basicOp(operation, value1, value2) {
    let a = operation;
    let b = value1;
    let c = value2;
    if (a == "+") {
        return b + c;
    } else if (a == "-") {
        return b - c;
    } else if (a == "*") {
        return b * c;
    } else if (a == "/") {
        return b / c;
    }
}