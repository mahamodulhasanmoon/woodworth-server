import 'dotenv/config'
import express from 'express'
import path from "path"

import routes from './routes'



import { errorHandler, notFoundHandler } from './errors'
import middleware from './middlewares'    
const app = express()
console.log(path.resolve(__dirname, 'uploads'));
app.use(express.json())
app.use(middleware)
app.use('/api/public', express.static(path.resolve(process.cwd(), 'dist', 'uploads')));
app.use('/api',routes)
app.use(notFoundHandler)
app.use(errorHandler)


export default app