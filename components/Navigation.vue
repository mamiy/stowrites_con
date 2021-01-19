<template>
  <nav>
    <NuxtLink to="/"><img src="../assets/gl_mark.png" alt="STOWRITES"></NuxtLink>
    <NuxtLink to="/">STOWRITES</NuxtLink>
    <NuxtLink to="/dashboard">DASHBOARD</NuxtLink>
  </nav>
</template>

<style lang="scss" scoped>
@import "/scss/common.scss";
nav {
  display: flex;
  align-items: center;
  padding: 2rem 3rem;
  border-bottom: 1px solid #EEE;
  color: $color_stowrites;
  font-family: baskerville, YuMincho, Yu Mincho, serif;
  font-feature-settings: "palt";
  letter-spacing: 0.05rem;
  img {
    width: 2rem;
    height: auto;
  }
  a {
    margin-right: 2rem;
    line-height: 1;
  }
}
</style>
