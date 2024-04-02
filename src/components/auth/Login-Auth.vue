<template>
  <img class="bgLogin" src="/src/assets/bg-6.jpg" alt="bg" />
  <div class="row" style="height: 100vh">
    <div
      v-bind:class="{
        'justify-center': $q.screen.md || $q.screen.sm || $q.screen.lg,
      }"
      class="col-12 flex content-center"
    >
      <q-card class="ub-login-card">
        <q-card-section
          class="ub-login-hdr text-white text-center flex items-center"
        >
          <img
            src="/src/assets/seguro.png"
            class="responsive q-mt-lg"
            alt="login-image"
            style="width: 500px; height: auto"
          />
        </q-card-section>
        <q-card-section>
          <q-form @submit="submitForm" class="q-gutter-md">
            <q-input v-model="email" type="email" label="Email">
              <template v-slot:prepend>
                <q-icon name="fas fa-user" />
              </template>
            </q-input>
            <q-input
              v-model="password"
              type="password"
              clearable
              label="Password"
            >
              <template v-slot:prepend>
                <q-icon name="fas fa-lock" />
              </template>
            </q-input>

            <q-card-actions align="right">
              <q-btn flat>Register</q-btn>
              <q-btn
                unelevated
                type="submit"
                color="secondary"
                :label="'Login'"
              />
            </q-card-actions>
          </q-form>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { LocalStorage, useQuasar } from "quasar";
import { useRouter } from "vue-router";
import { api } from "src/boot/axios";
import { postData } from "src/services/commonServices";

const $q = useQuasar();

const isLogin = ref(true);
const email = ref("");
const password = ref("");
const token = ref(null);
const router = useRouter();

const onSubmit = () => {
  if (accept.value !== true) {
    $q.notify({
      color: "red-5",
      textColor: "white",
      icon: "warning",
      message: "You need to accept the license and terms first",
    });
  } else {
    $q.notify({
      color: "green-4",
      textColor: "white",
      icon: "cloud_done",
      message: "Submitted",
    });
  }
};

const toggleAuthMode = () => {
  isLogin.value = !isLogin.value;
};

const submitForm = async () => {
  try {
    const data = await postData(
      "login",
      {
        email: email.value,
        password: password.value,
      },
      {},
      "Se ha autenticado con éxito"
    );
    LocalStorage.set("access_token", data.token);

    // Access router directly without the '$' prefix
    router.push({ name: "dashboard" });
    console.log("Access");
  } catch (error) {
    console.error("Error processing the request:", error.message);
  }
};
</script>

<style lang="scss" scope>
.ub-login-card {
  width: 100%;
  max-width: 400px;
  .ub-login-hdr {
    height: 200px;
    background: #0f2027;
    background: -webkit-linear-gradient(to right, #4ba958, #467f91, #2e647a);
    background: linear-gradient(to right, #336f89, #427f94, #b4d2b6);
  }
}
.bgLogin {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -1;
}
</style>
