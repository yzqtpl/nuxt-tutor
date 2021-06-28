<template>
  <div class='container'>
    <div>
      <Logo />
      <h1 class='title'>
        nuxt-tutor
      </h1>
      <div class='links'>
        <nuxt-link to='/fetchdata'>获取数据</nuxt-link>
      </div>
      <article>
        <span>{{ names }}</span>
        <article>{{ user }}</article>
      </article>
      <article v-for='item in mountains'><img :src='item.image' />{{ item.title }}</article>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapState } from 'vuex'

export default {
  mounted() {
    // this.addNames('aaaaaaa')
    // this.setMon( 'a')
  },
  computed: {
    names() {
      return this.$store.state.names
    },
    mountains() {
      return this.$store.state.mountains
    },
    ...mapState(['user'])
  },
  methods: {
    ...mapMutations({
      addNames: 'addNames',
      setMon: 'setMountains'
    })

  }

}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.links a {
  text-decoration: none;
}

</style>
