import fastify from 'fastify'
import fastifyCors from '@fastify/cors'
import { memoriesRoutes } from './routes/memories'

const app = fastify()

app.register(memoriesRoutes)
app.register(fastifyCors, {
  origin: true,
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🚀 Servidor HTTP SpaceTime rodando em http://localhost:3333')
  })
