<template>
  <div>
    <p class="wordCount">{{ wordCount }} 字</p>
  </div>
</template>

<script>
export default {
  name: 'WordCount',
  computed: {
    wordCount () {
      const temp = this.$store.state.writing.article.find((v) => {
        return Number(v.id) === Number(this.$route.params.id)
      })
      return (temp === undefined) ? '' : temp.wordCount
    }
  }
}
</script>

<style scoped>
.wordCount {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  border-radius: .25rem;
  background: #FFF;
  padding: .25rem .5rem;
  text-align: right;
  color: #555;
  font-size: .75rem;
  letter-spacing: .05rem;
}
</style>
