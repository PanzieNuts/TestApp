<template>
  <v-container fluid class="fill-height d-flex align-center justify-center">
    <v-card class="pa-6" elevation="10" width="400">
      <v-card-text class="text-center mt-5">
        <v-btn
          color="blue darken-4"
          dark
          block
          class="text-capitalize"
          @click="loginWithFacebook"
        >
          <v-icon class="mr-4" left>mdi-facebook</v-icon>
          Continue with Facebook
        </v-btn>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
function loginWithFacebook() {
  window.location.href = "http://localhost:8080/api/auth/facebook";
}

// Clean up Facebook redirect hash
if (window.location.hash === '#_=_') {
  history.replaceState(null, null, window.location.pathname);
}
</script>

<style scoped>
.v-card {
  border-radius: 20px;
}
</style>
