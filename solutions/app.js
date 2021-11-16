const checker = {
    rules: {
        visa: /^4\d{15}$/,
        ip: /^255.(\d{3}.){2}\d{2}$/,
        mac: /^\w\d:(\d{2}:){2}\d\w:\d{2}:AB$/
    },
    validate(text, type) {
        return text.match(this.rules[type]);
    }
};

export default checker;