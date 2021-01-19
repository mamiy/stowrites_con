<template>
  <div>
    <textarea :value="body" placeholder="ここに本文を入力できます" @keyup="dispatch" /></textarea>
  </div>
</template>

<script>
export default {
  name: 'EditForm',
  computed: {
    body () {
      const temp = this.$store.state.writing.article.find((v) => {
        return Number(v.id) === Number(this.$route.params.id)
      })
      return (temp === undefined) ? '' : temp.body
    }
  },
  methods: {
    dispatch (event) {
      const date = new Date()
      this.$store.dispatch('writing/update', {
        id: this.$route.params.id,
        event: event.target.value,
        date: date.toLocaleString('ja-JP', { timeZone: 'JST' })
      })
    }
  }
}
</script>

<style scoped>
textarea {
  width: 800px;
  height: calc(100vh - 10rem);
  padding: 5rem calc((100vw - 800px) / 2);
  color: #111;
  line-height: 2rem;
  box-sizing: content-box;
}
</style>
