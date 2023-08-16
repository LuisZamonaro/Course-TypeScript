import {Router, Request, Response} from 'express'
import { createMovie, findMovieById, getAllMovies, removeMovie, updateMovie } from '../controllers/MovieControllers'

// validations
import {validate} from './middleware/handleValidation'
import { movieCreteValidation } from './middleware/movieValidation'

const router = Router()

export default router.get("/test", (req: Request, res: Response) => {
    res.status(200).send("API Working!")                            
}).post("/movie", movieCreteValidation(), validate, createMovie)
.get("/movie/:id", findMovieById) // /:id -> rota dinâmica
.get('/movie', getAllMovies)
.delete("/movie/:id", removeMovie) // quando tem verbos http diferentes, pode usar a mesma rota
.patch("/movie/:id", movieCreteValidation(), validate, updateMovie) // update de atualização de campo a campo