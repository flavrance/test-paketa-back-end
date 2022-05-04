import { Request, Response } from 'express'
import Service from '../services/menu'
import DTO from '../objects/menu'
export default {
    create: async (req: Request, res: Response): Promise<Response> => {

        let menu = new DTO(req.body.id, req.body.name, req.body.relatedId)

        const id  = await Service.create(menu)

        return res.status(201).json({
            id,
        })
    },    
    getAll: async (_: Request, res: Response): Promise<Response> => {
        const menu = await Service.find()
        let menuTree = [];

        menu.forEach(item =>{
            if(item.relatedId == null) {

                let data = {
                    id: item.id,
                    name: item.name,
                    submenus: []
                }
                menuTree.push(data)
            }
        })

        let submenus = menu.filter(m => m.relatedId != null)

        submenus.forEach(sm =>{
            menuTree.find(m => m.id == sm.relatedId).
            
        })
    
        /**
         * recursive menu(menulist, item, relatedItem){
         * if(menulist.find(item)){
         * if(item.relatedId == relatedItem.id)
         *  
         * }
         * 
         * }
         */

        



        return res.json(menuTree)
    },
    delete: async (req: Request, res: Response): Promise<Response> => {
        
        if(!req.params.id)
            return res.status(400).json({ message: 'Menu not found' })
        
        return res.json({
            id: await Service.delete(Number(req.params.id))
        })
    },
}
