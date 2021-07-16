

export const UpdateFavorites = (favorites, item) => {
    const copyFavorite = [...favorites]
    const idx = copyFavorite.findIndex((favoriteItem) => {
        return (favoriteItem.id === item.id)
    })
    if (idx > -1) {
        const Added = { ...copyFavorite[idx] }
        Added.count += 1
        copyFavorite[idx] = Added
        return copyFavorite
    } else {
        return [...favorites, { ...item, count: 1 }]
    }
}
export const AddBagProperty = (favorites, data, item) => {
    const copyFavorite = [...favorites]
    const copyData = [...data]
    const id = copyFavorite.find((favoriteItem) => {
        return (favoriteItem.id === item.id)
    })
    if (id){
        const idx = copyData.findIndex((ind)=>{
            return (id.id === ind.id)
        })
        copyData[idx].bag = true
    }
  return copyData


}
export const UpdateDecrease = (favorites, item) => {
    const copyFavorite = [...favorites]
    const idx = copyFavorite.findIndex((favoriteItem) => {
        return (favoriteItem.id === item.id)
    })
    const copyItem = { ...copyFavorite[idx] }
    if (copyItem.count == 1) {
        copyFavorite.splice(idx, 1)
        console.log(copyFavorite)
        return copyFavorite
    }
    else {
        copyItem.count -= 1
        copyFavorite[idx] = copyItem
        return copyFavorite
    }
}
export const UpdateRemove = (favorites, item) => {
    const copyFavorite = [...favorites]
    const idx = copyFavorite.findIndex((favoriteItem) => {
        return (favoriteItem.id === item.id)
    })
    console.log(copyFavorite)
    copyFavorite.splice(idx, 1)
    return copyFavorite
}
