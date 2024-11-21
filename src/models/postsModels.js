import conectarAoBanco from "../config/dbConfig.js";
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO)

// Função assíncrona para obter todos os posts do banco de dados
export default async function getTodosPosts() {
    const db = conexao.db("imersao-instabytes")
    const colecao = db.collection("posts")
    return colecao.find().toArray()
}