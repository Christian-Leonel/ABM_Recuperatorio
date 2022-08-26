const {body}=require('express-validator');

const validaUserEdit = [

    body('nombre').notEmpty().withMessage('El Nombre es requerido'),

    body('apellido').notEmpty().withMessage('El Apellido es requerido'),

    body('dni').notEmpty().withMessage('El DNI es requerido').bail().isNumeric().withMessage("Solo se aceptan numeros (no ingresar simbolos)"),

    body('fechaNac').notEmpty().withMessage('La Fecha de nacimiento es requerida'),

    body('tel').notEmpty().withMessage('El número de contacto es requerido'),

    body('email1').notEmpty().withMessage('El Email es requerido').bail().isEmail().withMessage('el email debe tener un formato valido').bail(),

    body('email2').notEmpty().withMessage('El email es requerido').bail().isEmail().withMessage('el Email debe tener un formato válido').bail()
    .custom(async (email2, {req}) => {
        const email1 = req.body.email1
        if(email1 !== email2){
          throw new Error('Los emails no coinciden')
        }}),

    body("userClass").notEmpty().withMessage('Tipo de Usuario requerido')
]

module.exports = validaUserEdit;