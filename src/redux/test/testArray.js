const favorite =[
{
    name: "Anna",
    id: "8",
    count: 0
},
{
    name: "Karen",
    id: "5",
    count: 5
}
]
const data ={
    name: "karen",
    id: "5"
}
const UpdateFavore = (favorite, item)=>{
    const copyFavorite= [...favorite]
    const Ind = copyFavorite.findIndex(favoriteItem=>{
        return (favoriteItem.id === item.id)
    })
    
    console.log(Ind)
    if (Ind > -1){
        const Added = {...copyFavorite[Ind] }
        Added.count +=1
        console.log(Added)
        copyFavorite[Ind]=Added
        return copyFavorite
    }else {return [...favorite, {...item, count: 1}]}
}

UpdateFavore(favorite, data)
console.log( UpdateFavore(favorite, data))
