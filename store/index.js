export const state = () => ({
  names: [],
  user: '',
  mountains: []
})

export const mutations = {
  addNames(state, text) {
    state.names.push({
      text,
      done: false,
      id: Date.now()
    })
    console.log(state)
    console.log(`%caddNames mutation`, `color:red;font-size:16px;background:transparent`)
  },
  addUser(state) {
    state.user = '刻晴老婆'
  },
  setMountains(state, mountains) {
    state.mountains = mountains
  }
}
export const actions = {
  /**
   *
   * @param store
   * @param $http
   * @returns {Promise<void>}
   */
//!import 这里注意了,需要在nuxtconfig设置 ssr:true
  //这里第一个参数是vuex,第二个参数才是context
  // const {dispatch,commit,getters,state,rootState}= store
  async nuxtServerInit(store, { $http }) {
    const res =await $http.$get('https://api.nuxtjs.dev/mountains')
    console.log(res)
      store.commit('setMountains', res)
    store.commit('addUser')
    store.commit('addNames')
  }
}
