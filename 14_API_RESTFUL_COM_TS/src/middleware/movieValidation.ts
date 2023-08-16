import { body } from "express-validator"

export const movieCreteValidation = () => {
    return [ // array que vai conter o erros extraídos no handleValidation
        body("title").isString().withMessage("O título é obrigatório.").isLength({min: 5}).withMessage("O título precisa ter no mínimo 5 caracteres."),
        body("rating").isNumeric().withMessage("A nota precisa ser um número")
        .custom((value: number) => {
            if(value < 0 || value > 10) {
                throw new Error("A nota precisa ser entre 0 a 10")
            }
            return true // se a nota estiver dentro das regras, ele prossegue
        }),
        body("description").isString().withMessage("A descrição é obrigatória."),
        body("director").isString().withMessage("O nome do diretor é obrigatório."),
        body("poster").isURL().withMessage("A imagem precisa ser uma URL.")
    ]
}