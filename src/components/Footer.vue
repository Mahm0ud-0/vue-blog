<script setup>
import { RouterLink } from "vue-router"
import vue_logo from "../assets/icons/vue_logo.svg"
const logo = vue_logo
</script>

<template>
    <footer class="bg-background-light border-t border-black/10 mt-64">
        <div
            class="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex justify-between items-center"
        >
            <!-- logo -->
            <div
                class="flex gap-2 items-center font-semibold text-lg text-accent"
            >
                <img :src="logo" alt="" class="w-8" />
                Vue Blog
            </div>
            <!-- nav links & copyright -->
            <div
                class="flex flex-wrap items-center justify-center gap-6 text-xs md:text-sm"
            >
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/articles">Articles</RouterLink>
                <RouterLink to="/#about">About</RouterLink>

                <p class="text-xs text-primary-dark/80">
                    © 2024 Tech Insights. All rights reserved.
                </p>
            </div>
        </div>
    </footer>
</template>
