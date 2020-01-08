<template>
  <div>
    <div class="police-header">
      <h1>Status: {{`${police.status}`}}</h1>
      <h5 class="eyebrow">Start Date: {{ moment(police.registered).format('YYYY-MM-DD HH:MM:SS') }}</h5>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
  props: ['id'],
  created() {
    this.fetchPolice(this.id)
  },
  computed: mapState({
    police: state => (state.police.police)
  }),
  methods: mapActions('police', ['fetchPolice'])
}
</script>
<style scoped>
.location {
  margin-bottom: 0;
}
.location > .icon {
  margin-left: 10px;
}
.police-header > .title {
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
