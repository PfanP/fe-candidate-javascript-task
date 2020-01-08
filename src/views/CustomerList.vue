<template>
  <div>
    <h1>Customers</h1>
    <CustomerCard v-for="customer in customer.customers" :key="customer.uuid" :customer="customer"/>
    <span v-if="page !=1">
      <router-link :to="{ name: 'customer-list', query: { page: page -1}}" rel="prev">Prev Page</router-link>
      <span v-if="hasNextPage">&nbsp;|&nbsp;</span>
    </span>
    <router-link
      v-if="hasNextPage"
      :to="{ name: 'customer-list', query: { page: page +1}}"
      rel="next"
    >Next Page</router-link>
  </div>
</template>

<script>
import CustomerCard from '@/components/CustomerCard.vue'
import { mapState } from 'vuex'

export default {
  components: {
    CustomerCard
  },
  created() {
    this.perPage = 3 // Setting perPage here and not in data means it won't be reactive.
    // We don't need it to be reactive, and this way our component has access to it.

    this.$store.dispatch('customer/fetchCustomers', {
      perPage: this.perPage,
      page: this.page
    })
  },
  computed: {
    page() {
      return parseInt(this.$route.query.page) || 1
    },
    hasNextPage() {
      return this.customer.customersTotal > this.page * this.perPage
    },
    ...mapState(['customer'])
  }
}
</script>
