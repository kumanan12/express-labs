const Joi = require('joi')

const schema = Joi.object({
    a: Joi.string()
});

const { error, value } = schema.validate({ a: 1 });

console.log(`error is ${error}, value is ${JSON.stringify(value)}`);