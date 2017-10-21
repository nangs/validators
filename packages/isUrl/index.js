export default (str, options={
    protocols: ['https', 'http']
}) => {
    const protocols = options.protocols.join('|');
    const pattern = `\\b(${protocols}):\\/\\/[\\-A-Za-z0-9+&@#\\/%?=~_|!:,.;]*[\\-a-zA-Z‌0-9+&@#\\/%=~_|]*`;
    return new RegExp(pattern).test(str);
}