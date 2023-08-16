import {Request, Response} from 'express'

// Model
import { MovieModel } from '../src/models/Movie'

// Logger
import Logger from '../config/logger'

export async function createMovie(req: Request, res: Response) {
    try {
        const data = req.body // vem em json
        console.log(data)
        const movie = await MovieModel.create(data) // espera um input do MovieModel, ativando o método create com os dados fornecidos
        return res.status(201).json(movie)
    } catch (e: any) {
        console.log(`Erro no sistema: ${e.message}`)
        return res.status(500).json({error: "Por favor tente mais tarde!"})
    }
}

export async function findMovieById(req: Request, res: Response) {

    try {
        const id = req.params.id // pegar o id pela URL
        const movie =  await MovieModel.findById(id)

        if(!movie) {
            return res.status(404).json({error: "O filme não existe."})
        }

        return res.status(200).json(movie)
    } catch (e: any) {
        console.log(`Erro no sistema: ${e.message}`)
    }
}

export async function getAllMovies(req: Request, res: Response) {
    try {
        const movies = await MovieModel.find() // como não tem nada em específico dentro do find, ele vai retornar tudo
        return res.status(200).json(movies)
    } catch (e: any) {
        console.log(`Erro no sistema: ${e.message}`)
    }
}

export async function removeMovie(req: Request, res: Response) {
    try {
        const id = req.params.id
        const movie = await MovieModel.findById(id)

        if(!movie) {
            return res.status(404).json({error: "O filme não existe."})
        }

        await movie.deleteOne()

        return res.status(200).json({msg: "Filme removido com sucesso!"})
    } catch (e: any) {
        console.log(`Erro no sistema: ${e.message}`)
        return res.status(500).json({error: "Por favor tente mais tarde!"})
    }
}

export async function updateMovie(req: Request, res:Response) {
    try {
        const id = req.params.id
        const data = req.body
        const movie = await MovieModel.findById(id)

        if(!movie) {
            return res.status(404).json({error: "O filme não existe."})
        }

        await MovieModel.updateOne({_id: id}, data)

        return res.status(200).json(data)

    } catch (e: any) {
        console.log(`Erro no sistema: ${e.message}`)
        return res.status(500).json({error: "Por favor tente mais tarde!"})
    }
}