const createError = (data, status) => {
    const error = new Error();
    error.data = data;
    error.status = status;
    return error;
};

module.exports = {
    createError
};
