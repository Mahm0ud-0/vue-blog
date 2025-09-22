<script setup>
import { RouterLink, RouterView } from "vue-router"
import vue_logo from "./assets/icons/vue_logo.svg"
</script>

<template>
    <RouterLink to="/" />
    <RouterLink to="/articles" />
    <RouterLink to="/articles/1" />

    <RouterView />
</template>

<style scoped></style>
