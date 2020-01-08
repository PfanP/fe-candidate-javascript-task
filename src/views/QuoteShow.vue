<template>
  <div>
    <div class="quote-header">
      <h1>Status: {{`${quote.status}`}}</h1>
      <h5 class="eyebrow">Start Date: {{ moment(quote.registered).format('YYYY-MM-DD HH:MM:SS') }}</h5>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
  props: ['id'],
  created() {
    this.fetchQuote(this.id)
  },
  computed: mapState({
    quote: state => (state.quote.quote)
  }),
  methods: mapActions('quote', ['fetchQuote'])
}
</script>
<style scoped>
.location {
  margin-bottom: 0;
}
.location > .icon {
  margin-left: 10px;
}
.quote-header > .title {
  margin: 0;
}
.list-group {
  margin: 0;
  padding: 0;
  list-style: none;
}
.list-group > .list-item {
  padding: 1em 0;
  border-bottom: solid 1px #e5e5e5;
}
</style>
