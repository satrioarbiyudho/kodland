<template>
  <v-container class="pa-0" fluid>
    <v-card img="/background.png" width="100vw" height="100vh" tile>
      <v-container fluid class="fill-height">
        <v-row no-gutters class="pa-12">
          <v-col cols="6" class="white--text">
            <v-row no-gutters class="display-4 font-weight-bold pb-2">
              POP IT!
            </v-row>
            <v-row no-gutters class="display-1 pb-8">
              Лучшая игрушка-антистресс - бесконечная пупырчатая пленка!
            </v-row>
            <v-row no-gutters class="title">
              <v-btn color="kodland2" tile large @click="handleAlert">
                КУПИТЬ
              </v-btn>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'IndexPage',
  head: {
    title: 'Welcome!',
  },
  methods: {
    handleAlert() {
      window.alert('КУПИТЬ!')
    },
  },
}
</script>
