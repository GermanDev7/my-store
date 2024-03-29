const boom = require('@hapi/boom');

const { config } = require('./../config/config');
function checkApiKey(req, res, next) {
  const apikey = req.headers['api'];
  if (apikey === config.apikey) {
    next();
  } else {
    next(boom.unauthorized());
  }
}
function checkAdminRoles(req, res, next) {
  const user = req.user;
  if (user.role === 'admin') {
    next();
  } else {
    next(boom.unauthorized());
  }
}
//funcion dinamica para hacer la parte de los roles
function checkRoles(...roles) {
  console.log(roles);
  return (req, res, next) => {
    const user = req.user;
    console.log(user);
    //const roles=['admin','seller']
    if (roles.includes(user.role)) {
      next();
    } else {
      next(boom.unauthorized());
    }
  };
}

module.exports = { checkApiKey, checkAdminRoles, checkRoles };
