
export const state = {
  listFilter: ['plotting', 'writing', 'proofreading', 'completion', 'freezing'],
  listSearch: ''
}

export const actions = {
  update ({ commit }, payload) {
    // ミューテーションを呼び出し
    commit('update', { payload })
  },
  updateSearch ({ commit }, payload) {
    // ミューテーションを呼び出し
    commit('updateSearch', { payload })
  }
}

export const mutations = {
  // メッセージを変更するミューテーション
  update (state, payload) {
    state.listFilter = payload.payload.event
  },
  updateSearch (state, payload) {
    state.listSearch = payload.payload.event
  }
}
