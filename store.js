import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
	hotOrCold: 'plain'
}
const mutations = {
	startTheWar(state, side) {
		state.hotOrCold = side
	}
}

export default new Vuex.Store({
	mutations,
	state
})