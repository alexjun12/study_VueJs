<template>
<div>
  <div v-show="confirmText === '엄준식'">
    <h1>엄</h1>
    <img :src="imgSrc" />
  </div>
  <div v-show="confirmText !== '엄준식'">
    <h1>암호입력</h1>
    <input type="text" v-model="gotText" @keyup.enter="submit" />
  </div>
</div>
</template>
<script>
export default {
  name: 'NewVue',
  components: {},
  data() {
    return{
      imgSrc: "https://i.ytimg.com/vi/f08PnZA9AyY/hqdefault.jpg",
      gotText: '',
    };
  },
  computed: {
    confirmText () {
      return this.gotText;
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    submit() {
      this.gotText = '';
    }
  }
}
</script>
