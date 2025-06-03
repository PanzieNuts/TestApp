<template>
  <div class="text-center">
    <v-btn color="blue" @click="loginWithFacebook">Login</v-btn>
  </div>
</template>

<script setup>
function loginWithFacebook() {

  window.location.href = "https://81cd-180-232-43-67.ngrok-free.app/api/auth/facebook";
}
if (window.location.hash === '#_=_') {
    history.replaceState(null, null, window.location.pathname);
  }

</script>
