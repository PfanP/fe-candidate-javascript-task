<template>
  <div id="app">
    <site-header />

    <main class="content">
      <!-- Add your code here -->
        <router-view :key="$route.fullPath"/>
    </main>

    <site-footer />
  </div>
</template>

<script>

import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

export default {
  name: 'app',
  components: {
    SiteHeader,
    SiteFooter,
  }
}
</script>

<style lang="scss">
.-shadow {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.13);
}
.content {
  margin-top: 80px;
  box-sizing: border-box;
  width: 800px;
  padding: 0 20px 20px;
  margin: 0 auto;

  @include breakpoint(sm-up) {
    margin-top: 90px;
  }
}

</style>
