<template>
  <div class="articleStatus">
    <p>進行ステータス</p>
    <label v-for="status in statuses" :key="status.name">
      <input type="radio" v-model="articleStatus" :value="status.name" @change="dispatch">{{ status.label }}
    </label>
  </div>
</template>

<script>
export default {
  name: 'Stutas',
  data () {
    return {
      statuses: this.$store.state.status.statuses
    }
  },
  computed: {
    articleStatus () {
      const temp = this.$store.state.writing.article.find((v) => {
        return Number(v.id) === Number(this.$route.params.id)
      })
      return (temp === undefined) ? '' : temp.status
    }
  },
  methods: {
    dispatch (event) {
      const date = new Date()
      this.$store.dispatch('writing/updateStatus', {
        id: this.$route.params.id,
        event: event.target.value,
        date: date.toLocaleString('ja-JP', { timeZone: 'JST' })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.articleStatus {
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
