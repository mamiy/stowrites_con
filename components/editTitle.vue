<template>
  <div class="articleTitle">
    <p>タイトル</p>
    <input type="text" :value="title" @keyup="dispatch">
  </div>
</template>

<script>
export default {
  name: 'EditTitle',
  computed: {
    title () {
      const temp = this.$store.state.writing.article.find((v) => {
        return Number(v.id) === Number(this.$route.params.id)
      })
      return (temp === undefined) ? '' : temp.title
    }
  },
  methods: {
    // アクションを呼び出し
    dispatch (event) {
      const date = new Date()
      this.$store.dispatch('writing/updateTitle', {
        id: this.$route.params.id,
        event: event.target.value,
        date: date.toLocaleString('ja-JP', { timeZone: 'JST' })
      })
    }
  }
}
</script>

<style scoped>
.articleTitle {
  border-top: 1px #EEE solid;
  border-bottom: 1px #EEE solid;
  padding: 1.5rem;
}
p {
  margin-bottom: .75rem;
  font-size: .8rem;
  font-weight: bold;
}
input {
  width: 100%;
  border-bottom: 1px #EEE solid;
  padding: .5rem 0;
}
</style>
