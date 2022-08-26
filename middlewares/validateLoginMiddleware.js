
const {body} = require('express-validator');

const validateLoginMiddleware=[

    body('email').notEmpty().withMessage('Ingresá un email').bail().isEmail().withMessage('Formato de email inválido'),
    body('password').notEmpty().withMessage('Ingresá una contraseña'),

]

    module.exports = validateLoginMiddleware;