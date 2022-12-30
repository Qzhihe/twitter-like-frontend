import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    // state 写为函数式还是对象式？两者优劣？
    state: {
        curUser: {
            id: '8da66e0f-c4c0-4f66-abed-38ca31ae7ab5',
            logName: 'Qzhihe',
            headPic: '7325fe53-8f28-4d79-aa00-f4907bb17d72.jpg'
        },
        poosts: [],
        isBlurActive: false
    },
    getters: {

    },
    mutations: {
        setPoosts(state, poosts) {
            state.poosts = poosts
        }
    }
})

export default store