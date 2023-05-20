import fastify from 'fastify'

const app = fastify()

app.get('/hello', () => {
  return 'Hello World!!'
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🚀 Servidor HTTP SpaceTime rodando em http://localhost:3333')
  })
