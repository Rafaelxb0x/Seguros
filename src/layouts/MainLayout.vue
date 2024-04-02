<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="glossy">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-space></q-space>

        <q-btn
          v-if="smallScreen"
          :text-color="showSearchToolbar ? 'primary' : ''"
          dense
          unelevated
          icon="search"
          class="q-ma-xs"
          @click="showSearchToolbar = !showSearchToolbar"
        ></q-btn>

        <q-input
          v-if="!smallScreen"
          :dark="true"
          v-model="searchQuery"
          debounce="500"
          dense
          filled
          placeholder="Search"
          clearable
          class="col-md-3"
        >
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
        </q-input>

        <q-btn dense unelevated icon="fas fa-bell" class="q-ma-xs">
          <q-badge color="red" floating>5</q-badge>
          <q-menu v-model="messagesOpen">
            <messages @close="messagesOpen = false"></messages>
          </q-menu>
        </q-btn>

        <q-btn-dropdown
          dense
          unelevated
          v-model="settingsOpen"
          dropdown-icon="settings"
          class="ub-btn-dropdown-bare q-ma-xs"
        >
          <settings @close="settingsOpen = false"></settings>
        </q-btn-dropdown>
        <q-btn-dropdown unelevated v-model="userInfoOpen" no-caps>
          <template v-slot:label>
            <div class="row items-center no-wrap">
              <q-avatar size="sm">
                <img src="/public/1.png" />
              </q-avatar>
              <div class="text-center q-pa-sm">Rafale Garcia</div>
            </div>
          </template>

          <!-- Botón de Logout -->
          <q-item clickable @click="logOut">
            <q-item-section>Logout</q-item-section>
            <q-item-section side right>
              <q-icon name="logout" />
            </q-item-section>
          </q-item>

          <!-- Botón de Settings -->
          <q-item clickable @click="goToSettings">
            <q-item-section>Settings</q-item-section>
            <q-item-section side right>
              <q-icon name="settings" />
            </q-item-section>
          </q-item>

          <user-info></user-info>
        </q-btn-dropdown>
      </q-toolbar>
      <q-toolbar v-if="smallScreen && showSearchToolbar">
        <q-input
          :dark="true"
          v-model="searchQuery"
          debounce="500"
          dense
          filled
          placeholder="Search"
          clearable
          class="full-width"
        >
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
        </q-input>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <img
          src="/src/assets/seguro.png"
          class="responsive q-mt-md"
          alt="login-image"
        />

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container class="bg-grey-2" style="height: 100vh">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";
import { deleteData } from "src/services/commonServices";
import EssentialLink from "components/EssentialLink.vue";

const router = useRouter();
const $q = useQuasar();

defineOptions({
  name: "MainLayout",
});

const linksList = [
  {
    title: "Dashboard",
    icon: "fas fa-chart-line",
    link: "/dashboard",
    name: "dashboard",
  },

  {
    title: "Clientes",
    icon: "fas fa-users",
    link: "https://github.com/quasarframework",
    subLinks: [
      {
        title: "Familiares",
        link: "#",
        icon: "fas fa-people-roof",
      },
    ],
  },
  {
    title: "Proveedor",
    icon: "fas fa-id-card-clip",
    link: "/Proveedores",
  },
  {
    title: "Tipo de Seguro",
    icon: "fas fa-shield-halved",
    link: "/Seguros",
  },
  {
    title: "Presupuesto",
    icon: "fas fa-hand-holding-dollar",
    link: "https://twitter.quasar.dev",
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

const logOut = async () => {
  try {
    await deleteData("logout", "Cerraste sesion exitosamente!");
    localStorage.clear(); // Elimina el token del localStorage

    router.push({ name: "login.Auth" }); // Redirige al usuario a la página de login
  } catch (error) {
    console.error("Error processing the request:", error.message);
  }
};
</script>

<style lang="scss">
.q-layout__section--marginal {
  background: linear-gradient(to right, #4bbb52, #427f94, #336f89);
  color: #fff;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
