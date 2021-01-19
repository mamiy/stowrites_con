<template>
  <div>
    <Navigation />
    <div class="dashboardContainer">
      <div class="controlPanel">
        <ListFilter />
        <ListSearch />
        <input type="button" value="新規作成" class="addWriting" @click="addWriting" />
      </div>
      <div class="articles">
        <div v-for="article in filteredArticles" :key="article.id" class="article">
          <NuxtLink :to="`writing/${ article.id }`">
            <div class="summary">
              <p class="title">{{ article.title }}</p>
              <p class="body">{{ article.body }}</p>
              <p class="date">{{ article.createdDate }} | {{ article.updatedDate }}</p>
            </div>
            <div class="wordCount">
              <p>{{ article.wordCount }} 字</p>
            </div>
            <div class="status">
              <p v-bind:class="article.status">
                {{ (statuses.find((v) => v.name === article.status)).label }}
                <!-- article.statusとstatusesの中からnameが一致するもののラベルを返す -->
              </p>
            </div>
          </NuxtLink>
          <div class="deleteWriting">
            <p @click="deleteWriting(article)">削除</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'App',
  data () {
    return {
      statuses: this.$store.state.status.statuses
    }
  },
  computed: {
    ...mapGetters('writing', ['articles']),
    filteredArticles () {
      const deleted = this.articles.filter((v) => {
        return v.deleted === false
      })
      const filtered = deleted.filter((v) => {
        return this.$store.state.setting.listFilter.includes(v.status) && (v.title.includes(this.$store.state.setting.listSearch) || v.body.includes(this.$store.state.setting.listSearch))
      })
      const sorted = filtered.sort(function (a, b) {
        if (a.updatedDate > b.updatedDate) {
          return -1
        } else {
          return 1
        }
      })
      return sorted
    }
  },
  methods: {
    ...mapMutations('writing', [
      'addWriting',
      'deleteWriting'
    ])
  },
  transition: 'page'
}
</script>

<style lang="scss" scoped>
  @import "/scss/destyle.scss";
  @import "/scss/common.scss";
  .dashboardContainer {
    display: block;
    margin: 5rem auto;
    width: 800px;
  }
  .controlPanel {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;
    font-size: .8rem;
  }
  .addWriting {
    display: inline-block;
    width: auto;
    border: 1px $color_stowrites solid;
    border-radius: 10rem;
    padding: .5rem 1.5rem;
    color: $color_stowrites;
  }
  .articles {
    border-top: 1px #EEE solid;
  }
  .article {
    display: flex;
    align-items: center;
    border-bottom: 1px #EEE solid;
    transition: .5s;
    &:hover {
      background: #fdfcf9;
    }
  }
  .article a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0 1rem 1rem;
    width: calc(100% - 3rem);
    text-align: left;
    line-height: 1.7rem;
  }
  .deleteWriting {
    margin-left: auto;
    border: 1px solid #EEE;
    border-radius: .5rem;
    padding: .25rem .5rem;
    font-size: 0.7rem;
    cursor: pointer;
  }
  .summary {
    width: calc(100% - 12rem);
  }
  .wordCount {
    width: 6rem;
    padding-right: 1.5rem;
    font-size: .8rem;
    text-align: right;
  }
  .status {
    width: 5rem;
    font-size: .9rem;
    p::before {
      content: '●';
      margin-right: .25rem;
      font-size: .75rem;
    }
    p.plotting::before {
      color: $color_plotting;
    }
    p.writing::before {
      color: $color_writing;
    }
    p.proofreading::before {
      color: $color_proofreading;
    }
    p.completion::before {
      color: $color_completion;
    }
    p.freezing::before {
      color: $color_freezing;
    }
  }
  .title {
    width: 100%;
    padding-right: 1.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: bold;
    font-feature-settings: "palt";
    letter-spacing: .05rem;
  }
  .body {
    width: 100%;
    padding-right: 1.5rem;
    font-size: .9rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .date {
    color: #555;
    font-size: .75rem;
    letter-spacing: .025rem;
  }
</style>
