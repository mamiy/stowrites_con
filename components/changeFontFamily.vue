<template>
  <div class="articleFontFamily">
    <p>フォント</p>
    <label><input type="radio" v-model="articleFontFamily" value="mincho" @change="dispatch">明朝体</label>
    <label><input type="radio" v-model="articleFontFamily" value="gothic" @change="dispatch">ゴシック体</label>
  </div>
</template>

<script>
export default {
  name: 'ChangeFontFamily',
  computed: {
    articleFontFamily () {
      const temp = this.$store.state.writing.article.find((v) => {
        return Number(v.id) === Number(this.$route.params.id)
      })
      return (temp === undefined) ? '' : temp.fontFamily
    }
  },
  methods: {
    dispatch (event) {
      this.$store.dispatch('writing/updateFontFamily', {
        event: event.target.value,
        id: this.$route.params.id
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.articleFontFamily {
  border-bottom: 1px #EEE solid;
  padding: 1.5rem;
}
p {
  margin-bottom: .75rem;
  font-size: .8rem;
  font-weight: bold;
}
label {
  display: flex;
  align-items: center;
  &:not(:last-of-type) {
    margin-bottom: .5rem;
  }
}
input[type="radio"] {
  margin: 0 1rem 0 0;
}
</style>
