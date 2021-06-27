export const state = () => ({
  names: [],
  user: ''
})

export const mutations = {
  addNames(state, text) {
    state.names.push({
      text,
      done: false,
      id: Date.now()
    })
  },
  addUser(state) {
    state.user = '刻晴老婆'
  }
}
export const actions = {

  async nuxtServerInit({ commit }) {
    await commit('addNames')
    await commit('addUser')
  }

}
