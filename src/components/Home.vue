<template>
  <!-- HEADER -->
  <div
    class="w-full border-b border-gray-200"
    style="display: flex; justify-content: flex-start; align-items: center; padding: 10px"
  >
    <v-col cols="9">
      <div style="display: flex; align-items: center; gap: 10px">
        <v-icon class="ml-7" size="30">mdi-home-modern</v-icon>
        <h2>Urban Nest</h2>
        <a class="mr-7 ml-10" href="">Buy</a>
        <a class="mr-7" href="">Rent</a>
        <a class="mr-7" href="">Sell</a>
        <a class="mr-7" href="">Mortgage</a>
        <a class="mr-7" href="">Find Agent</a>
      </div>
    </v-col>
    <v-col cols="3" style="display: flex; justify-content: flex-end; align-items: center">
      <v-row>
        <v-text-field placeholder="Search" class="mr-3" flat density="compact" style="background-color: #e7edf4; border-radius: 15px" hide-details prepend-inner-icon="mdi-magnify"/>
        <v-btn class="mr-3" color="red" style="border-radius: 10px; text-transform: none;" @click="logout()"> Log Out </v-btn>
      </v-row>
    </v-col>
  </div>

  <!-- MAIN PAGE -->
<div style="display:flex; justify-content:center; align-items:center;">
    <div style="width: 900px; height: 480px; object-fit: contain; border-radius: 20px; margin-top: 20px;">
      <v-img
          style="border-radius: 20px;"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLIDd8xcD9OMLa9QLm18INwtvp1TwfmYP30G6oM-ahSB8bVTgmdtgW9Ktr6r3tosLhi0O4QrsYlUtV5OtYEs7P039sgmq4S7QALAQQnI4ZAsDAFEX6zC9dv0N0wOrKMtXQxLY58rTv_5eTndE0OnHwoCZZlGwSMxVLjpTHz9amJDU901wzjY-4aHKplpJs2SEe-EXXpbrW8kaan8JZjvIUC6eu6uNjCv9pvRVPPqGzHR0mOkpoE3w09Ym3wqSkgUQtWOWnROXGweE"
          cover
      ></v-img>
    </div>
</div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()



const logout = async () => {
  await axios.get("http://localhost:8080/api/logout", { withCredentials: true })
    .then(() => {
      localStorage.removeItem("token");
      router.push("/login");
    })
    .catch(err => {
      console.error("Logout failed", err);
    });
}

onMounted( async() => {
  await axios.get('http://localhost:8080/api/protected', { withCredentials: true })
    .then(() => {
      console.log("User is authenticated")
    })
    .catch(() => {
      router.push('/login')
    });
});

</script>



<style>
a {
  text-decoration: none;
  color: inherit;
  background: none;
  padding: 0;
  margin: 0;
  border: none;
  font: inherit;
  cursor: pointer;
}
.v-btn{
  text-transform: none;
}
</style>
