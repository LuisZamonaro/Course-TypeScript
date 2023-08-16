// middleware coringa para tratar qualquer erro do sistema

import {Request, Response, NextFunction} from 'express'
import {validationResult} from 'express-validator'
                                                    // deixa seguir ou não os dados
export const validate = (req:Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req)

    if(errors.isEmpty()) {
        return next()
    }

    const extractedErrors: object[] = []

    errors.array().map((err) => extractedErrors.push({[err.param]: err.msg}))// inserir cada um dos erros nele (lista de erros)

    return res.status(422).json({
        errors: extractedErrors,
    })
}