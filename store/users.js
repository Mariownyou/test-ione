export const state = () => ({
    list: []
})

export const mutations = {
    set( state, tasks ) {
        state.list = tasks
    }
}

export const getters = {
    get(state) {
        return state.list
    }
}