export const state = () => ({
    list: []
})

export const mutations = {
    add( state, user ) {
        state.list.push(user)
    },
    remove( state, user ) {
        const index = state.list.indexOf(user)
        state.list.splice(index, 1)
    }
}

export const getters = {
    get(state) {
        return state.list
    }
}