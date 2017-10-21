export default (value) => {
    try {
        JSON.parse(value);
    } catch(e) {
        return false;
    }
    return true;
};