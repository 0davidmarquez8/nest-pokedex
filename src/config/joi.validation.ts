import * as Joi from 'joi';

// Valida que las variables de entorno esten configuradas
// Se ejecuta primero antes que el env.config
export const JoiValidationSchema = Joi.object({
    MONGODB: Joi.required(),
    PORT: Joi.number().default(3005),
    DEFAULT_LIMIT: Joi.number().default(6),
})