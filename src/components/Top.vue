<template lang="pug">
.top
  img.image(src="public/img/logo.png")
  .entrance {{ title }}
</template>

<script>

export default {
  props: ['title'],
  data () {
    return {
    }
  },
  mounted () {
  },
  computed: {
  },
  methods: {
  },
  watch: {
  }
}
</script>

<style lang="stylus" scoped>
</style>

