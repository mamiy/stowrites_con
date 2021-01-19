
export const state = {
  article: [
    {
      id: 1,
      createdDate: '2021/1/19 0:00:00',
      updatedDate: '2021/1/19 0:00:00',
      title: 'サンプル',
      body: 'STOWRITESの機能について\n\n■ ダッシュボード\n・新規作成\n・削除\n・進行ステータスでリストを絞り込み\n・タイトル、本文からワード検索\n・更新日時が新しいものを上に表示\n\n■ このページ\n・本文を入力・編集（この文章が書かれているのが本文のテキストエリアです。試しに編集してみてください）\n・右下に文字数を表示\n・左のハンバーガーメニュー\n　・タイトルを設定\n　・フォントを明朝体／ゴシック体で設定\n　・進行ステータスを設定',
      status: 'plotting',
      wordCount: 216,
      fontFamily: 'mincho',
      deleted: false
    }
  ]
}

export const actions = {
  // ミューテーションを呼び出し
  update ({ commit }, payload) {
    commit('update', { payload })
  },
  updateTitle ({ commit }, payload) {
    commit('updateTitle', { payload })
  },
  updateFontFamily ({ commit }, payload) {
    commit('updateFontFamily', { payload })
  },
  updateStatus ({ commit }, payload) {
    commit('updateStatus', { payload })
  }
}

export const mutations = {
  update (state, payload) {
    const temp = state.article.find((v) => {
      return Number(v.id) === Number(payload.payload.id)
    })
    temp.body = payload.payload.event
    temp.wordCount = payload.payload.event.length
    temp.updatedDate = payload.payload.date
  },
  updateTitle (state, payload) {
    const temp = state.article.find((v) => {
      return Number(v.id) === Number(payload.payload.id)
    })
    temp.title = payload.payload.event
    temp.updatedDate = payload.payload.date
  },
  addWriting (state) {
    const date = new Date()
    const article = {
      id: state.article.length + 1,
      createdDate: date.toLocaleString('ja-JP', { timeZone: 'JST' }),
      updatedDate: date.toLocaleString('ja-JP', { timeZone: 'JST' }),
      title: 'タイトル',
      body: '',
      status: 'writing',
      wordCount: 0,
      fontFamily: 'mincho',
      deleted: false
    }
    state.article.push(article)
  },
  deleteWriting (state, payload) {
    if (confirm('削除しますか？')) {
      const temp = state.article.find((v) => {
        return Number(v.id) === Number(payload.id)
      })
      temp.deleted = true
    }
  },
  updateFontFamily (state, payload) {
    const temp = state.article.find((v) => {
      return Number(v.id) === Number(payload.payload.id)
    })
    temp.fontFamily = payload.payload.event
  },
  updateStatus (state, payload) {
    const temp = state.article.find((v) => {
      return Number(v.id) === Number(payload.payload.id)
    })
    temp.status = payload.payload.event
    temp.updatedDate = payload.payload.date
  }
}

export const getters = {
  getBody (state) {
    return state.article.body
  },
  articles (state) {
    return state.article
  }
}
