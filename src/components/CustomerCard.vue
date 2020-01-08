<template>
  <div class="tile is-ancestor">
    <div class="tile is-parent">
      <div class="tile is-child box">
        <h1>Customer</h1>
        <router-link
          class="customer-link"
          :to="{ name: 'customer-show', params: { id: customer.customerInfo.uuid } }"
        >
          <h1>
            Name:
            {{
              `${customer.customerInfo.name.first} ${customer.customerInfo.name.last}`
            }}
          </h1>
          <h5 class="eyebrow">
            Registered:
            {{
              moment(customer.customerInfo.registered).format(
                "YYYY-MM-DD HH:MM:SS"
              )
            }}
          </h5>
          <h5>
            Active Status:
            <span
              v-bind:class="{
                'has-text-success': customer.customerInfo.isActive,
                'has-text-danger': !customer.customerInfo.isActive
              }"
              >{{ customer.customerInfo.isActive }}</span
            >
          </h5>
          <h5>Email: {{ customer.customerInfo.email }}</h5>
          <h5>Phone: {{ customer.customerInfo.phone }}</h5>
          <h5>Address: {{ customer.customerInfo.address }}</h5>
        </router-link>
      </div>
    </div>
    <div class="tile is-4 is-vertical is-parent">
      <div class="tile is-child box">
        <h1>Police</h1>
        <div v-for="police of customer.policeInfo"  v-bind:key="police.uuid">
            <router-link
            class="customer-link"
            :to="{ name: 'police-show', params: { id: police.uuid } }"
            >
                <h5>Status: {{police.status}}</h5>
                <h5>Start Date: {{moment(police.start_date).format('YYYY-MM-DD HH:MM:SS')}}</h5>
                <h5>End Date: {{moment(police.end_date).format('YYYY-MM-DD HH:MM:SS')}}</h5>
            </router-link>
        </div>
      </div>
      <div class="tile is-child box">
        <h1>Quote</h1>
        <div v-for="quote of customer.quoteInfo"  v-bind:key="quote.uuid">
            <router-link
            class="customer-link"
            :to="{ name: 'quote-show', params: { id: quote.uuid } }"
            >
                <h5>Status: {{quote.status}}</h5>
                <h5>Start Date: {{moment(quote.start_date).format('YYYY-MM-DD HH:MM:SS')}}</h5>
                <h5>End Date: {{moment(quote.end_date).format('YYYY-MM-DD HH:MM:SS')}}</h5>
            </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    customer: Object
  },
  mounted: function() {
    console.log(this.customer);
  }
};
</script>

<style scoped></style>
