<template>
  <div class="q-px-sm q-mx-xl">
    <q-table
      flat
      bordered
      title="Treats"
      :rows="rows"
      :columns="columns"
      color="primary"
      row-key="name"
    >
      <template v-slot:top-right>
        <q-btn
          v-for="filter in backdropFilterList"
          :key="filter.label"
          color="primary"
          icon-right="fas fa-plus"
          :label="filter.label"
          no-caps
          @click="handleFilterClick(filter)"
        />
      </template>
    </q-table>

    <q-dialog v-model="dialog">
      <q-card class="card-proveedor">
        <q-card-section glossy class="dialog-title card-bg-title">
          Registro de Seguros
        </q-card-section>
        <q-card-section class="flex items-center q-mt-md">
          <q-input class="q-pr-md" outlined label="Nombre" v-model="nombre" />
          <q-input class="q-pr-md" outlined label="Tipo" v-model="tipo" />
          <q-input outlined label="Precio" v-model="precio" />
        </q-card-section>

        <q-card-actions align="right">
          <q-btn
            class="q-mr-sm q-mb-md"
            glossy
            label="Enviar"
            color="secondary"
            @click="closeDialog"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useQuasar } from "quasar";

const $q = useQuasar();

const columns = [
  {
    name: "name",
    required: true,
    label: "Dessert (100g serving)",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "calories",
    align: "center",
    label: "Calories",
    field: "calories",
    sortable: true,
  },
  { name: "fat", label: "Fat (g)", field: "fat", sortable: true },
  { name: "carbs", label: "Carbs (g)", field: "carbs" },
  { name: "protein", label: "Protein (g)", field: "protein" },
  { name: "sodium", label: "Sodium (mg)", field: "sodium" },
  {
    name: "calcium",
    label: "Calcium (%)",
    field: "calcium",
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    name: "iron",
    label: "Iron (%)",
    field: "iron",
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
];

const rows = [
  {
    name: "Frozen Yogurt",
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    sodium: 87,
    calcium: "14%",
    iron: "1%",
  },
  {
    name: "Ice cream sandwich",
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    sodium: 129,
    calcium: "8%",
    iron: "1%",
  },
  {
    name: "Eclair",
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    sodium: 337,
    calcium: "6%",
    iron: "7%",
  },
  {
    name: "Cupcake",
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    sodium: 413,
    calcium: "3%",
    iron: "8%",
  },
  {
    name: "Gingerbread",
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    sodium: 327,
    calcium: "7%",
    iron: "16%",
  },
  {
    name: "Jelly bean",
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
    sodium: 50,
    calcium: "0%",
    iron: "0%",
  },
  {
    name: "Lollipop",
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0,
    sodium: 38,
    calcium: "0%",
    iron: "2%",
  },
  {
    name: "Honeycomb",
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
    sodium: 562,
    calcium: "0%",
    iron: "45%",
  },
  {
    name: "Donut",
    calories: 452,
    fat: 25.0,
    carbs: 51,
    protein: 4.9,
    sodium: 326,
    calcium: "2%",
    iron: "22%",
  },
  {
    name: "KitKat",
    calories: 518,
    fat: 26.0,
    carbs: 65,
    protein: 7,
    sodium: 54,
    calcium: "12%",
    iron: "6%",
  },
];

const list = ["Agregar"];

const dialog = ref(false);
const backdropFilter = ref(null);

const backdropFilterList = list.map((filter) => ({
  label: filter,
  onClick: () => {
    backdropFilter.value = filter;
    dialog.value = true;
  },
}));

const handleFilterClick = (filter) => {
  backdropFilter.value = filter.label;
  dialog.value = true;
};

const closeDialog = () => {
  dialog.value = false;
};

const nombre = ref("");
const tipo = ref("");
const precio = ref("");
</script>

<style lang="scss" scoped>
.card-bg-title {
  background: linear-gradient(to right, #4bbb52, #427f94, #336f89);
  color: #fff;
}
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

.dialog-title {
  margin-bottom: 0;
  font-size: 20px;
}

.card-proveedor {
  max-width: 635px;
}
</style>
