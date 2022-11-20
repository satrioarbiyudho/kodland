<template>
  <v-footer color="kodland3" height="80px" dark>
    <v-row no-gutters class="text-center">
      <v-col
        v-for="(other, index) in others"
        :key="index"
        align-self="center"
        @click="handleAlert(other)"
      >
        {{ other }}
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: 'MainFooter',
  data() {
    return {
      others: [
        'НЕ_ПУПЫРКА.РУ',
        'Способы оплаты',
        'Доставка',
        'Опт',
        'Контакты',
      ],
    }
  },
  methods: {
    handleAlert(message) {
      window.alert(message)
    },
  },
}
</script>

<style></style>
