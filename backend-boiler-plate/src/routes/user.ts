import express from 'express'
import User from '../controllers/user'
import validation from '../validation/user'

const routes = express.Router()

routes.post('/', validation.upsert, User.create)
routes.get('/:id', validation.objectId, User.getOne)
routes.get('/', User.getAll)
routes.put('/:id', validation.objectId, validation.upsert, User.update)
routes.delete('/:id', validation.objectId, User.delete)

export default routes
