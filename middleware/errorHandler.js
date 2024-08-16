const errorHandler = (err, req, res, next) => {
    if (process.env.NODE_ENV === 'development') {
        res.status(err.status || 500).json({
            message: err.message,
            stack: err.stack
        });
    } else {
        res.status(err.status || 500).json({
            message: 'Something went wrong. Please try again later.'
        });
    }
};

module.exports = errorHandler;
