import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        cards: [],
    },
    getters: {
        getCards: state => state.cards,
    },
    mutations: {
        setCards(state, payload) {
            if(payload) {
                state.cards = payload;
            }
        }
    }
})