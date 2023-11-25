import express from 'express'
import { apiRouter } from './routers/api.router.js'
// import {  } from './midlewares/midlewares.js'


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(express.static('./public'))
app.use(express.static('./views'))
app.use('/static', express.static('./static'))

app.use(apiRouter)
app.use((req, res, next) => {
    res.status(404).send('Not Found');
});

app.listen(8080, ()=> {console.log('conectado')})