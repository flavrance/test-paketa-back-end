import helper from '../src/helpers/helpers'
const menuTree = [
    {
      "id": "1",
      "name": "Eletrodomésticos",
      "relatedId": null,
      "submenus": [] 
    },
    {
        "id": "2",
        "name": "Televisores",
        "relatedId": "1",
        "submenus": []
    },
    {
        "id": "3",
        "name": "LCD",    
        "relatedId": "2",
        "submenus": []
    },
    {
        "id": "4",
        "name": "110",    
        "relatedId": "3",
        "submenus": []
    },
    {
        "id": "5",
        "name": "220",    
        "relatedId": "3",
        "submenus": []
    },
    {
        "id": "6",
        "name": "Plasma",    
        "relatedId": "2",
        "submenus": []
    },
    {
      "id": "7",
      "name": "Informática",
      "relatedId": null,
      "submenus": []
    },
    {
        "id": "8",
        "name": "Computadores",
        "relatedId": "7",
        "submenus": []
    },
    {
        "id": "9",
        "name": "Apple",
        "relatedId": "8",
        "submenus": []
    },
    {
        "id": "10",
        "name": "MacBook",
        "relatedId": "9",
        "submenus": []
    },
    {
        "id": "11",
        "name": "Cabos",
        "relatedId": "10",
        "submenus": []
    },
    {
        "id": "12",
        "name": "iMac",
        "relatedId": "9",
        "submenus": []
    }    
  ]

menuTree.forEach(item => {    
    console.log(helper.getChilds(menuTree, Number(item.id)))
})

