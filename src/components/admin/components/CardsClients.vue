<template>
  <div class="q-pa-xs flex justify-around">
    <div v-for="card in cardsData" :key="card.title" class="my-card">
      <q-card flat bordered>
        <q-card-section>
          <p class="q-mb-none q-ml-xs text-subtitle1">
            {{ card.title }}
            <span class="text-grey">| {{ card.subtitle }}</span>
          </p>
        </q-card-section>
        <q-card-section>
          <div class="row">
            <div class="col-6 flex justify-center content-center">
              <div
                class="flex justify-center content-center background-rounded"
                :style="`background-color: ${card.background}`"
              >
                <q-icon
                  :name="card.icon"
                  :style="`font-size: 35px; color: ${card.color}`"
                />
              </div>
            </div>
            <div class="col-6 flex column content-start justify-center q-pl-md">
              <p class="text-h4 text-bold text-light-blue-9 q-mb-none">
                {{ card.value }}
              </p>
              <p class="q-mb-none">
                <span class="text-green-8 text-bold">{{ card.increase }}</span>
                increase
              </p>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script setup>
const cardsData = [
  {
    title: "Sales",
    subtitle: "Today",
    icon: "fab fa-opencart",
    color: "blue",
    value: 145,
    increase: "12%",
    background: "rgb(190, 193, 248)",
  },
  {
    title: "Revenue",
    subtitle: "This Month",
    icon: "fab fa-dollar-sign",
    color: "green",
    value: "$3,264",
    increase: "8%",
    background: "rgb(175, 246, 171)",
  },
  {
    title: "Customers",
    subtitle: "This Year",
    icon: "fas fa-user-friends",
    color: "red",
    value: 1244,
    increase: "12%",
    background: "rgb(246, 212, 171)",
  },
];
</script>

<style lang="scss" scoped>
.background-rounded {
  height: 90px;
  width: 90px;
  border-radius: 50%;
}

.my-card {
  border-radius: 8px;
  width: 100%;
  max-width: 320px;
  height: 200px;
  margin-top: 20px;
}
</style>
