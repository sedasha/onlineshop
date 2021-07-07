export const ShopbagCount = (favorites)=>{
    let totalCount = 0
    for (let i = 0; i<favorites.length; i++){
        let count = favorites[i].count
        totalCount += count
    }
    return totalCount
}