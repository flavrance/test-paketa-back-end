import DTO from '../objects/menu'
import Menu from '../models/menu'

export default {
    create: async (menu: DTO): Promise<Number> => {
        const { id } = await Menu.create(menu)

        return id
    },    
    getAll: async (): Promise<any> => {
        const menu = await Menu.find()
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
    delete: async (id: Number): Promise<Number> => {
        const menu = await Menu.findOne({ _id: id })
        if (!menu || !menu?.id)
            throw new Error('Menu not found')

        await Menu.deleteOne({ id: menu.id })
        return menu.id
    },
}
