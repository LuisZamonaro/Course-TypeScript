import winston from 'winston'
import config from 'config'

const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4
}

const level = () => {
    const env = config.get<string>("env") || "development"
    const isDevelopment = env === "development"
    return isDevelopment ? "debug" : "warn"
}

const colors = {
    error: "red",
    warn: "yellow",
    info: "green",
    http: "magenta",
    debug: "white",
}

winston.addColors(colors)

const format = winston.format.combine(
    winston.format.timestamp({format: "YYYY-MM-DD HH:mm:ss:ms"}),
    winston.format.colorize({all: true}),
    winston.format.printf(
        (info) => `${info.timestamp} - ${info.level}: ${info.message}`
    )
)

const transports = [
    //saber os erros que estão acontecendo no sistema
    new winston.transports.Console(),
    new winston.transports.File({ // tratamento individual
        filename: "logs/error.log",
        level: "error",
    }),
    new winston.transports.File({filename: "logs/all.log"}) // tratamento geral
]

const Logger = winston.createLogger({
    level: level(),
    levels,
    format,
    transports,
}) // instância de log para tudo que foi criado acima

export default Logger