function howManydays(month) {
    var days = new Date().getMonth(), x;
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            x = 31;
            break;
        case 2:
            x = 28;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            x = 30;
            break;

    }
    return x;
}