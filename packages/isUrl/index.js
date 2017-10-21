export default str => {
    const pattern = /\b(https?|ftp|file):\/\/[\-A-Za-z0-9+&@#\/%?=~_|!:,.;]*[\-a-zA-Z‌0-9+&@#\/%=~_|]*/;
    return pattern.test(str);
}