

export const UpdateFavorites = (favorites, item) =>{
 const copyFavorite = [...favorites]
 const idx = copyFavorite.findIndex((favoriteItem)=>{
     return(favoriteItem.id===item.id)
    }) 
    if (idx> -1){
        const Added = {...copyFavorite[idx]}
        Added.count +=1
        copyFavorite[idx] = Added
        return copyFavorite
    } else{
        return [...favorites, {...item, count:1}]
    }
}

export const UpdateDecrease =(favorites, item)=>{
    const copyFavorite = [...favorites]
    const idx = copyFavorite.findIndex((favoriteItem)=>{
        return(favoriteItem.id===item.id)
       }) 
       const copyItem = {...copyFavorite[idx]}
       if(copyItem.count == 1){
           copyFavorite.splice(idx, 1)
           console.log(copyFavorite)
           return copyFavorite
       }
       else{
            copyItem.count -=1
            copyFavorite[idx]= copyItem
            return copyFavorite
       }
}
export const UpdateRemove = (favorites, item)=>{
    const copyFavorite = [...favorites]
    const idx = copyFavorite.findIndex((favoriteItem)=>{
        return(favoriteItem.id===item.id)
       })
       console.log(idx)
       copyFavorite.splice(idx, 1)
       return copyFavorite
}
