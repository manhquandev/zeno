<script setup lang="ts">

</script>

<template>
  <v-app>
    <v-navigation-drawer  :disable-resize-watcher="false" color="grey-darken-4" border="0" width="70">

    </v-navigation-drawer>
    <v-main style="height: 100vh;width: 100%">
        <div class="app">

        </div>
    </v-main>
  </v-app>
</template>

<style scoped>
.app {
  -webkit-app-region: drag;
  width: 100%;
  min-height: 20px;
  background: #212121;
  display: flex;

}
</style>
