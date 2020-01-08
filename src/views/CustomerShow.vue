<template>
  <div>
    <div class="customer-header" v-if="Object.keys(customer) > 0">
      <h1>Name: {{`${customer.name.first} ${customer.name.last}`}}</h1>
      <h5 class="eyebrow">Registered: {{ moment(customer.registered).format('YYYY-MM-DD HH:MM:SS') }}</h5>
      <h5>Active Status: <span v-bind:class="{'has-text-success': customer.isActive, 'has-text-danger': !customer.isActive}">{{ customer.isActive }}</span></h5>
      <h5>Email: {{customer.email}}</h5>
      <h5>Phone: {{customer.phone}}</h5>
      <h5>Address: {{customer.address}}</h5>
    </div>

  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
  props: ['id'],
  created() {
    this.fetchCustomer(this.id)
  },
  computed: mapState({
    customer: state => state.customer.customer
  }),
  methods: mapActions('customer', ['fetchCustomer'])
}
</script>
<style scoped>
.location {
  margin-bottom: 0;
}
.location > .icon {
  margin-left: 10px;
}
.customer-header > .title {
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
