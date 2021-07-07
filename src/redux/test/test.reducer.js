const initialState={
    name: 'hey'
}
export default function testReducer (state= initialState, {type, payload}){
    switch(type){
        case "CHANGENAME": 
        return {...state, name:payload}
        default: return state
    }
}