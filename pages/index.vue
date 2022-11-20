<template>
  <v-container class="pa-0" fluid>
    <!-- Hero Section -->
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
              <v-btn
                color="kodland2"
                tile
                x-large
                @click="handleAlert('КУПИТЬ!')"
              >
                КУПИТЬ
              </v-btn>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>

    <!-- Why Section -->
    <v-card width="100vw" height="360px" tile>
      <v-container class="justify-center fill-height">
        <v-row
          no-gutters
          class="headline justify-center font-weight-bold pt-8 pb-4"
        >
          Что такое Pop it?
        </v-row>
        <v-row no-gutters class="subtitle-1 text-center pb-8">
          Pon it лословно переволится как «лопни это». Это летская игоа, поопесс
          в которой можно соавнить с лопанием возлушно-пузыочатои упаковочнои
          пленки. по в отличии от пленки поп-иты можно давить с характерными
          ощущениями и звуками «бесконечно»: десятки силиконовых пузырей просто
          выдавливаются в другую сторону.
        </v-row>
      </v-container>
    </v-card>

    <!-- Product Section -->
    <v-card width="100vw" height="450px" tile color="kodland2">
      <v-container class="justify-center fill-height pa-6" fluid>
        <v-row
          no-gutters
          class="headline justify-center font-weight-bold pt-8 pb-4"
        >
          Выбери свой Pop-It!
        </v-row>
        <v-row no-gutters class="subtitle-1 text-center">
          <v-col v-for="product in products" :key="product.image">
            <v-container fluid class="fill-height">
              <v-card color="transparent" elevation="0">
                <v-img :src="product?.image" max-height="160px" contain />
                <v-card-subtitle class="font-weight-bold title pb-2">
                  {{ product?.title }}
                </v-card-subtitle>
                <v-card-actions class="justify-center pt-0">
                  <v-btn
                    color="kodland1"
                    tile
                    @click="handleAlert(product?.title)"
                    >КУПИТЬ
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
    </v-card>

    <!-- Article? Section -->
    <v-card width="100vw" height="600px" tile img="/bg-grid.png">
      <v-container class="justify-center fill-height pa-8" fluid>
        <v-row no-gutters class="">
          <v-col cols="7" align-self="center">
            <v-row no-gutters class="headline font-weight-bold pb-8">
              Правила игры
            </v-row>
            <v-row no-gutters class="subtitle-1 justify-left">
              Игооки холат по очерели и нажимают на пупыоки Нужно обазательно
              заканчивать ряд который начали. Нажимать можно максимум на 3
              пупырки одновременно (обязательно полжны быть балом. нельзя
              нажимать сразу несколько пупырок, если они не находятся впоитык)
              Задача слелать так, чтобь сопеоник схолил послелним. кто холил
              поспелним - тот пооигоал!
            </v-row>
          </v-col>
          <v-col cols="5" align-self="center">
            <v-img src="/photo.jpg" contain max-height="380px" />
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      products: [
        { title: 'Разноцветный кваратный', image: '/square.png' },
        { title: 'Among Us, мраморный', image: '/amongus.png' },
        { title: 'Разноцветный круглый', image: '/round.png' },
      ],
    }
  },
  head: {
    title: 'Welcome!',
  },
  computed: {
    innerWidth() {
      return window.innerWidth
    },
    innerHeight() {
      return window.innerHeight
    },
  },
  methods: {
    handleAlert(message) {
      window.alert(message)
    },
  },
}
</script>
