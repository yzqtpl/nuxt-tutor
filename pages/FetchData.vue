<template>
<div>
  <h1>Data fetched using asyncData</h1>
  <ul>
    <li v-for="mountain in mountains" :key="mountain.title">
      <NuxtLink
        :to="{ name: 'mountains-slug', params: { slug: mountain.slug } }"
      >
        {{ mountain.title }}
      </NuxtLink>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'FetchData',
  data(){
    return{
      mountains:[]
    }
  },
  activated() {
    // Call fetch again if last fetch more than 30 sec ago
    if (this.$fetchState.timestamp <= Date.now() - 30000) {
      this.$fetch()
    }
  },
  async fetch( ) {
    this.mountains = await fetch('https://api.nuxtjs.dev/mountains').then((json ) => {
      return json.json()
    })

  }
}
</script>

<style scoped>

</style>
