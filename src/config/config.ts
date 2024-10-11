import DotenvFlow from 'dotenv-flow'

DotenvFlow.config()
// console.log(process.env)

export default {
    ENV: process.env.ENV,
    Port: process.env.PORT,
    Server_Url: process.env.SERVER_URL,
    Database_Url: process.env.DATABASE_URL
}
