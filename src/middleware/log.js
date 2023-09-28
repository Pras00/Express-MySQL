const logRequest = (req, res, next) => {
    console.log(`Terjadi log request ke API : ${req.path}`);
    next();
};


module.exports = logRequest;