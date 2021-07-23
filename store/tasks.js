export const state = () => ({
    list: []
})

export const mutations = {
    set( state, tasks ) {
        state.list = tasks
    },
    add( state, tasks ) {
        state.list = [...state.list, ...tasks]
    }
}

export const getters = {
    get(state) {
        return state.list
    }
}