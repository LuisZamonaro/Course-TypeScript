// import morgan, {StreamOptions} from 'morgan'

// import config from 'config'

// const stream: StreamOptions = {
//     write: (message) => console.log(message),
// }

// const skip = () => { // não imprimir as mensagens do morgan caso chegue na produção
//     const env = config.get<string>("env") || "development"
//     return env !== "development"
// }

// const morganMiddleware = morgan( // conecta o skip
//     ":method :url :status :res[content-length] - :response-time ms",
//     {stream, skip}
// )

// export default morganMiddleware