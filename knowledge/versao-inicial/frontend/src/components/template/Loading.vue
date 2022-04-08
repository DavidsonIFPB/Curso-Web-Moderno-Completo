<template>
  <div class="loading">
      <img src="@/assets/loading.gif" alt="loading">
  </div>
</template>

<script>
export default {
    name: 'Loading'

}
</script>

<style>
    .loading {
        display: flex;

        justify-content: center;
        align-items: center;
        grid-area: content;
    }

</style>