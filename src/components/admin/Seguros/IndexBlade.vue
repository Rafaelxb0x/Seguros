<template>
  <div class="title-container">
    <h5 class="title">Tipos de Seguros</h5>
    <p class="breadcrumb">
      <span class="text-grey">Home /</span>
      <span class="text-black"> Tipos</span>
    </p>
  </div>
  <TableSeguros />
  <div class="spacer"></div>
</template>

<script setup>
import TableSeguros from "./components/TableSeguros.vue";
</script>

<style lang="scss" scoped>
.title-container {
  margin-left: 20px;
  margin-bottom: 20px;
  margin-top: 40px;
  background-color: #f5f5f5;
}

.title {
  margin-left: 40px;
  margin-bottom: 0;
  margin-top: 10px;
  color: #607d8b;
}

.breadcrumb {
  margin-left: 40px;
  margin-top: 0;
  color: #9e9e9e;
}

.spacer {
  padding: 20px;
}
</style>
