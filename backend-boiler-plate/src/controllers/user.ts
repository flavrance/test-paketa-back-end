import { Request, Response } from 'express'
import User from '../models/user'

export default {
    create: async (req: Request, res: Response): Promise<Response> => {
        const { id } = await User.create(req.body)

        return res.status(201).json({
            id,
        })
    },
    getOne: async (req: Request, res: Response): Promise<Response> => {
        const user = await User.findOne({ _id: req.params.id })

        return res.json(user)
    },
    getAll: async (_: Request, res: Response): Promise<Response> => {
        const user = await User.find()

        return res.json(user)
    },
    update: async (req: Request, res: Response): Promise<Response> => {
        const user = await User.findOne({ _id: req.params.id })
        if (!user || !user?.id)
            return res.status(400).json({ message: 'User not found' })

        await User.updateOne({ id: user.id }, req.body)
        return res.json({
            id: user.id,
        })
    },
    delete: async (req: Request, res: Response): Promise<Response> => {
        const user = await User.findOne({ _id: req.params.id })
        if (!user || !user?.id)
            return res.status(400).json({ message: 'User not found' })

        await User.deleteOne({ id: user.id })
        return res.json({
            id: user.id,
        })
    },
}
