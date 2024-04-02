<template>
  <div class="title-container">
    <h5 class="title">Dashboard</h5>
    <p class="breadcrumb q-mb-none">
      <span class="text-grey">Home / </span>
      <span class="text-black">Dashboard</span>
    </p>
  </div>
  <div class="q-pa-sm q-mx-lg">
    <CardsClients />
  </div>
  <div></div>
  <TableClients />
</template>

<script>
import TableClients from "./components/TableClients.vue";
import CardsClients from "./components/CardsClients.vue";

export default {
  components: {
    TableClients,
    CardsClients,
  },

  name: "DashboardBlade",
};
</script>

<style lang="scss" scoped>
.title-container {
  margin-left: 30px;
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
</style>
