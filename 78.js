function dutyFree(normPrice, discount, hol) {
    let sum = hol / (normPrice * discount);
    return Math.floor(sum * 100);

}