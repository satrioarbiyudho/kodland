<template>
  <v-app-bar fixed color="transparent" elevation="0" class="px-4">
    <span class="font-weight-medium" @click="$router.push('/')">
      НЕ_ПУПЫРКА.РУ
    </span>
    <v-spacer />
    <v-tabs v-if="innerWidth > 768" right color="white" hide-slider>
      <v-tab
        v-for="x in menu"
        :key="x.to"
        :to="x.to"
        class="text-none font-weight-medium"
        >{{ x.title }}</v-tab
      >
    </v-tabs>
    <v-menu v-else offset-y class="justify-end">
      <template #activator="{ on, attrs }">
        <v-icon v-bind="attrs" v-on="on">mdi-menu</v-icon>
      </template>
      <v-list class="pa-0">
        <v-list-item v-for="y in menu" :key="y.to" :to="y.to">
          <v-list-item-title>{{ y.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  name: 'MainHeader',
  data() {
    return {
      menu: [
        { title: 'O HAC', to: '/oha' },
        { title: 'СКИДКИ', to: '/ckn' },
        { title: 'КОНТАКТЫ', to: '/kon' },
      ],
    }
  },
  computed: {
    innerWidth() {
      return window.innerWidth
    },
    innerHeight() {
      return window.innerHeight
    },
  },
}
</script>

<style></style>
