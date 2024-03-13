import Express from 'express'
import ws from 'express-ws'
import { authRouter } from './routes/auth/auth'

// express, ws init
const expressApp = Express()
export const app = ws(expressApp).app

// middlewares
app.use(Express.json())
app.use(authRouter)

// server runs
app.listen(8000, () => console.log(`Express app running on port 8000`))