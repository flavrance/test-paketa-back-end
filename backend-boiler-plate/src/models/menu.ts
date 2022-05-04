import { model, Schema } from 'mongoose'

interface IMEnu {
    _id?: string
    name: string
    relatedId: number    
}

const schema = new Schema<IMEnu>({
    name: { type: String, required: true },
    relatedId: { type: Number, required: false}
})

export default model<IMEnu>('menu', schema, 'menus')
