const reverseSeq = n => {
    if (n < 1) {
        return [];
    }
    const reverseArray = reverseSeq(n - 1);
    reverseArray.unshift(n);
    return reverseArray;
}