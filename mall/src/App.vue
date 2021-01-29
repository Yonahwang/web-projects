<template>
  <div id="app">
    <div>it's app.vue</div>
    <router-view/>
    <div class="g-footer-container">
    <c-tabbar/>
    </div>
  </div>
</template>
<script>
  import CTabbar from 'components/tabbar';
  export default {
    name: 'App',
    components: {
      CTabbar
    }
  };
</script>
