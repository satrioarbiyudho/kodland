<template>
  <v-app>
    <v-main>
      <main-header />
      <Nuxt />
      <main-footer />
    </v-main>
  </v-app>
</template>

<script>
import MainFooter from '~/components/common/MainFooter.vue'
import MainHeader from '~/components/common/MainHeader.vue'
export default {
  name: 'DefaultLayout',
  components: { MainHeader, MainFooter },
  data() {
    return {}
  },
}
</script>
