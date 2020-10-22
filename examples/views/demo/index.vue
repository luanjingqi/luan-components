<template>
  <div class="demo">
    <c1 />
  </div>
</template>
<script>
import c1 from './compment1';
export default {
  components: {
    c1,
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.demo {
  height: 100%;
  width: 100%;
  display: flex;
  background-color: black;
}
</style>