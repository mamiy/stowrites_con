<template>
  <div>
    <nav>
      <NuxtLink to="/dashboard"><img src="../assets/icons/chevron-back-outline.svg" alt="リストへ戻る"></NuxtLink>
      <div class="toggle" :class="{ 'show': isShow }" @click="showToggle">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
    <transition>
      <div v-show="isShow" class="body">
        <EditTitle />
        <FontFamily />
        <Status />
      </div>
    </transition>
  </div>
</template>

<script>
import EditTitle from './EditTitle.vue'
import FontFamily from './changeFontFamily.vue'
import Status from './changeStatus.vue'
export default {
  name: 'WritingsPanel',
  components: {
    EditTitle,
    FontFamily,
    Status
  },
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    showToggle () {
      this.isShow = !this.isShow
    }
  }
}
</script>

<style lang="scss" scoped>
nav {
  position: fixed;
  top: 2rem;
  left: 2rem;
  z-index: 100;
}
a {
  display: block;
  margin-bottom: 1rem;
  img {
    width: 1.5rem;
  }
}
.toggle {
  display: inline-block;
  position: relative;
  transition: all .4s;
  width: 1.5rem;
  height: 1rem;
  cursor: pointer;
  span {
    position: absolute;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #555;
    border-radius: 1px;
    &:nth-of-type(1) {
      top: 0;
      transition: .4s;
    }
    &:nth-of-type(2) {
      top: 50%;
      transform: translateY(-50%);
      transition: .2s;
    }
    &:nth-of-type(3) {
      bottom: 0;
      transition: .4s;
    }
  }
  &.show span {
    &:nth-of-type(1) {
      transform: translateY(.5rem) rotate(45deg);
      transition: .4s;
    }
    &:nth-of-type(2) {
      opacity: 0;
      transition: .2s;
    }
    &:nth-of-type(3) {
      transform: translateY(-.5rem) rotate(-45deg);
      transition: .4s;
    }
  }
}
.body {
  position: fixed;
  top: 0;
  left: 0;
  width: 20rem;
  height: 100vh;
  border-right: 1px #EEE solid;
  background: #FFF;
  padding-top: 8rem;
  z-index: 1;
  overflow-y: auto;
}
</style>
