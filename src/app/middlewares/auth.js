export default (req, res, next) => {
  const autHeader = req.headers.authorization;

  console.log(autHeader);

  return next();
};
