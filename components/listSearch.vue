<template>
  <div class="filterSearch">
    <img src="../assets/icons/search-outline.svg" alt="タイトル、本文から検索">
    <input :value="ListSearch" placeholder="タイトル、本文" @keyup="dispatch">
  </div>
</template>

<script>
export default {
  name: 'ListSearch',
  data () {
    return {
      ListSearch: ''
    }
  },
  methods: {
    // アクションを呼び出し
    dispatch (event) {
      this.$store.dispatch('setting/updateSearch', {
        event: event.target.value
      })
    }
  },
  mounted () {
    setTimeout(() => { // 反映されるのを待ってから実行
      // 初期処理
      this.ListSearch = this.$store.state.setting.listSearch
    }, 0)
  }
}
</script>

<style lang="scss">
.filterSearch {
  display: flex;
  align-items: center;
  margin: 0 auto 0 1rem;
  width: 20rem;
  border-radius: 10rem;
  background: #FAFAFA;
  padding: 0 1.5rem;
  img {
    width: 1rem;
    height: auto;
  }
  input {
    width: 100%;
    border: none;
    padding: .75rem;
  }
}
</style>
