import express, {Request, Response} from "express"
import router from "./routes/routes"

export function createApp () {

    const app = express()

    app.use(express.json())
    app.use('/api', router)

    return app
}
