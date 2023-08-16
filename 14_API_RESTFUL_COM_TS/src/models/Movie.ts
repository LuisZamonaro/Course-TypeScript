import {model, Schema} from 'mongoose'

const movieSchema = new Schema(
    {
        title: {type: String},
        rating: {type: Number},
        description: {type: String},
        director: {type: String},
        stars: {type: Array},
        poster: {type: String} // imagem, porém é tratado como string
    },
    {
        timestamps: true // data que o filme foi criado e outra em que o filme foi atualizado
    }
)

export const MovieModel = model("Movie", movieSchema)
