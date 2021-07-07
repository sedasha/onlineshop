import localStorage from 'redux-persist/lib/storage'


export const authPersistConfig = {
    key: "AccountReducer",
    storage: localStorage,
    whitelist: ['user']
}
export const shopPersistConfig = {
    key: "Shop",
    storage: localStorage,
    whitelist: ['favorite']
}