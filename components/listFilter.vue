<template>
  <div class="filterStatus">
    <div class="toggle" :class="{ 'show': isShowFilterStatus }" @click="filterToggle">ステータスで絞り込み</div>
    <transition>
      <div v-show="isShowFilterStatus" class="body">
        <label v-for="status in statuses" :key="status.name">
          <input type="checkbox" v-model="ListFilter" :value="status.name" @change="dispatch">{{ status.label }}
        </label>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ListFilter',
  data () {
    return {
      ListFilter: [],
      isShowFilterStatus: false,
      statuses: this.$store.state.status.statuses
    }
  },
  methods: {
    // アクションを呼び出し
    dispatch (event) {
      this.$store.dispatch('setting/update', {
        event: this.ListFilter
      })
    },
    filterToggle () {
      this.isShowFilterStatus = !this.isShowFilterStatus
    }
  },
  mounted () {
    setTimeout(() => { // 反映されるのを待ってから実行
      // 初期処理
      this.ListFilter = this.$store.state.setting.listFilter
    }, 0)
  }
}
</script>

<style lang="scss" scoped>
.filterStatus {
  .toggle {
    display: flex;
    align-items: center;
    border-radius: .25rem;
    background: #FAFAFA;
    padding: .75rem 1.5rem;
    cursor: pointer;
    &::after {
      content: url('../assets/icons/chevron-down-outline.svg');
      display: inline-block;
      margin-left:1rem;
      width: 1rem;
      line-height: 1;
      transition: .5s;
    }
    &.show::after {
      transform: rotate(180deg);
    }
  }
  .body {
    position: absolute;
    border-radius: .25rem;
    background: #FAFAFA;
    padding: .5rem 2rem;
  }
}
.filterStatus label {
  display: flex;
  align-items: center;
  margin-bottom: .5rem;
  input[type=checkbox] {
    margin: 0 1rem 0 0;
  }
}

</style>
