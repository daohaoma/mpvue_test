<template>
  <div>
    <p class="card">
      {{text}}
    </p>
  </div>
</template>

<script>
export default {
  props: ["text"]
};
</script>

<style lang="scss" scoped>
.card {
  color: skyblue;
  padding: 10px;
}
</style>
