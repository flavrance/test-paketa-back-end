import * as yup from 'yup'
import mongoose from 'mongoose'
import { Request, Response, NextFunction } from 'express'

export default {
    upsert: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const schema = yup.object().shape({
                name: yup.string().required().min(3),
                email: yup.string().email().required().min(5),
                password: yup.string().required().min(6),
                dob: yup.date(),
            })

            await schema.validate(req.body, { abortEarly: false })
            return next()
        } catch (err) {
            const { errors } = err as yup.ValidationError
            return res.status(400).json({ messages: errors })
        }
    },
    objectId: (req: Request, res: Response, next: NextFunction) => {
        if (!mongoose.Types.ObjectId.isValid(req.params.id))
            return res
                .status(400)
                .json({ message: 'Id must be a valid MongoDB ObjectId' })

        return next()
    },
}
