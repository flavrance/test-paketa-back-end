
function getChilds (array: any[], parentId: Number) {
    return array.reduce(function (ret: any[], item: any) {
        if (item.relatedId == parentId) {            
            ret = ret.concat(item, getChilds(array, item.id))
        }
        return ret
        }, [])
}
export default { 
    getChilds : getChilds   
}


