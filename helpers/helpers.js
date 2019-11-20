function validationMsg(type, msg) {
    let message = 'a';
    if (type === 'success') {
        message = 'Successfully registered!';
    } else {
        message = msg;
    }
    return message;
}

module.exports = {
    validationMsg
}