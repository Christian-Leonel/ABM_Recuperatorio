const path=require('path');
const {body}=require('express-validator');

const validateRegister=[
    body('nombre').notEmpty().withMessage('El Nombre es requerido'),

    body('apellido').notEmpty().withMessage('El Apellido es requerido'),

    body('dni').notEmpty().withMessage('El DNI es requerido'),

    body('fechaNac').notEmpty().withMessage('La fecha de nacimiento es requerida'),

    body('password1').notEmpty().withMessage('La contraseña es requerida'),
    
    body('password2').notEmpty().withMessage('Vuelve a ingresar tu contraseña').custom(async (password2, {req}) => {
      const password1 = req.body.password1
      if(password1 !== password2){
        throw new Error('Las contraseñas no coinciden')
      }}),


    body('tel').notEmpty().withMessage('El número de contacto es requerido'),

    body('email1').notEmpty().withMessage('El Email es requerido').bail().isEmail().withMessage('El email debe tener un formato válido'),

    body('email2').notEmpty().withMessage('Vuelve a ingresar tu email').bail().isEmail().withMessage('El email debe tener un formato válido')
    .custom(async (email2, {req}) => {
      const email1 = req.body.email1
      if(email1 !== email2){
        throw new Error('Los emails no coinciden')
      }}),
    
    body("userClass").notEmpty().withMessage('Tipo de Usuario requerido'),


]

    module.exports=validateRegister;