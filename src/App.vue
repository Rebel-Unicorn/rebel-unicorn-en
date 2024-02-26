<template>
  <main class="relative w-screen">
    <TopNavbar />
    <router-view />
  </main>
</template>

<script>
import TopNavbar from "@/components/TopNavbar.vue";

export default {
  components: {
    TopNavbar,
  },
};
</script>

<style>
/* main {
  isolation: isolate;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
