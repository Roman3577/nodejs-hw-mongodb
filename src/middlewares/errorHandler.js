const errorHandler = (err, req, res, next) => {
  const { message = 'Internal Server Error' } = err;
  res.status(500).json({
    status: 'error',
    message,
    data: null,
  });
};

export default errorHandler;
