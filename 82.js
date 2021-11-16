function toFreud(string) {
    if (string == "" || string == null) {
        return "";
    } else {
        return string.replace(/[^\s]+/g, "sex")
    }
}