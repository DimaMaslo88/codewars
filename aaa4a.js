function array(arr) {

    if (arr.length > 3) {
        let res = arr.split(",").slice(1, -1).join(" ");
        if (res === '')
            return null;
        else
            return res
    } else {
        return null;
    }
}