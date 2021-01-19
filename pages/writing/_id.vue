<template>
  <div>
    <div class="writingContainer" :class="fontFamily">
      <EditForm />
      <WordCount />
      <WritingsPanel />
    </div>
  </div>
</template>

<script>

import EditForm from '../../components/EditForm.vue'
import WordCount from '../../components/WordCount.vue'
import WritingsPanel from '../../components/WritingsPanel.vue'
export default {
  name: 'App',
  components: {
    EditForm,
    WordCount,
    WritingsPanel
  },
  data () {
    return {
      gothic: 'gothic',
      mincho: 'mincho'
    }
  },
  computed: {
    fontFamily () {
      const temp = this.$store.state.writing.article.find((v) => {
        return Number(v.id) === Number(this.$route.params.id)
      })
      return (temp === undefined) ? '' : temp.fontFamily
    }
  }
}
</script>

<style lang="scss">
  @import "/scss/destyle.scss";
  @import "/scss/common.scss";
  .writingContainer {
    display: block;
    width: 100vw;
  }
  .gothic {
    input[type="text"],
    textarea {
      font-family: "游ゴシック体", YuGothic, "游ゴシック Medium", "Yu Gothic Medium", "游ゴシック", "Yu Gothic", sans-serif;
    }
  }
  .mincho {
    input[type="text"],
    textarea {
      font-family: "YuMincho", "Hiragino Mincho ProN", "Yu Mincho", "MS PMincho", serif;
    }
  }
</style>
