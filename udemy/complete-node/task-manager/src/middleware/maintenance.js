const maintenance = (req, res, next) => {
  res.status(503).send('Site undergoing maintenance. Try again later.');
};

export default maintenance;
