<template>
  <div>
    <!-- Verifica si el título es "Clientes" y tiene subLinks -->
    <q-expansion-item
      v-if="title === 'Clientes' && subLinks.length > 0"
      :label="title"
      :icon="icon"
      :caption="caption"
      group="links"
    >
      <q-list>
        <EssentialLink
          v-for="subLink in subLinks"
          :key="subLink.title"
          v-bind="subLink"
          @click="link.clickHandler ? link.clickHandler() : () => {}"
        />
      </q-list>
    </q-expansion-item>
    <!-- Para los demás links, renderiza un q-item normal -->
    <q-item v-else clickable v-ripple :to="link">
      <q-item-section avatar>
        <q-icon :name="icon" />
      </q-item-section>
      <q-item-section>
        {{ title }}
      </q-item-section>
    </q-item>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    default: "",
  },
  link: {
    type: String,
    default: "#",
  },
  icon: {
    type: String,
    default: "",
  },
  subLinks: {
    type: Array,
    default: () => [],
  },
});
</script>

<style lang="scss" scoped>
.q-item--active {
  background: linear-gradient(to right, #4bbb52, #427f94, #336f89);
  color: #fff;
}
</style>
