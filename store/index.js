export const actions = {
  // ブラウザリロード時にlocalStorageのステートを同期する
  nuxtClientInit ({ commit }, context) {
    const data = JSON.parse(localStorage.getItem('stowrites')) || []
    if (data) {
      commit('reload', data)
    }
  }
}

export const mutations = {
  reload (state, data) {
    state = data
  }
}
