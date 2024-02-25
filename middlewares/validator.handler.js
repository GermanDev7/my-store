//validador dinamico con clousure

const boom = require('@hapi/boom');

function validateHandler(schema, property) {
  return (req, res, next) => {
    const data = req[property];

    //req.body //post
    //req.params //get
    //req.query //depende
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
      next(boom.badRequest(error));
    }
    next();
  };
}

module.exports = validateHandler;
