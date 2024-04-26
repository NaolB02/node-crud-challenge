const Joi = require('joi');

exports.CreatePersonSchema = Joi.object({
    name: Joi.string().required().messages({
        "any.required": "Name is required",
        "string.empty": "Name is required",
      }),
      
    age: Joi.number().min(0).required().messages({
        "any.required": "Age is required",
        "number.base": "Age must be a number",
        "number.min": "Age must be greater than or equal to zero",
    }),
      
    hobbies: Joi.array().required().messages({
        "any.required": "The field hobbies is required",
        "array.base": "Hobbies must array of strings",
    }),
});

exports.UpdatePersonSchema = Joi.object({
    name: Joi.string().messages({
        "string.empty": "Name is required",
      }),
      
    age: Joi.number().min(0).messages({
        "number.min": "Age must be greater than or equal to zero",
        "number.base": "Age must be a number"
    }),
      
    hobbies: Joi.array().messages({
        "array.base": "Hobbies must array of strings",
    }),
});