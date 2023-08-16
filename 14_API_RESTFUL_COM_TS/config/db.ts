import mongoose from "mongoose";
import config from 'config'

// Logger
// import Logger from "./logger";

async function connect() {
    const dbUri = config.get<string>("dbUri")

    try {
        await mongoose.connect(dbUri)
        console.log("Conectou ao banco de dados!")
    } catch (e) {
        console.log("Não foi possível conectar.")
        console.log(`Erro: ${e}`)
        process.exit(1) // sempre que der erro, vai parar a aplicação
    }
}

export default connect