<script setup>
import { RouterLink, RouterView } from "vue-router"
import vue_logo from "./assets/icons/vue_logo.svg"
import dark_mode from "./assets/icons/dark_mode.svg"
import burger_menu from "./assets/icons/burger.svg"

const logo = vue_logo
const dark = dark_mode
const burger = burger_menu
</script>

<template>
    <header class="sticky top-0 left-0 backdrop-blur-sm bg-background-light/80">
        <div
            class="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16"
        >
            <!-- logo -->
            <div
                class="flex gap-2 items-center font-semibold text-lg text-accent"
            >
                <img :src="logo" alt="" class="w-8" />
                Vue Blog
            </div>

            <!-- nav -->
            <nav class="space-x-4 font-bold hidden md:flex">
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/articles">articles</RouterLink>
            </nav>

            <!-- butotns -->
            <button
                class="bg-accent/20 hover:scale-105 p-2 rounded-full cursor-pointer hidden md:inline-flex"
            >
                <img :src="dark" alt="" />
            </button>
            <button
                class="hover:scale-105 p-2 rounded-full cursor-pointer inline-flex md:hidden"
            >
                <img :src="burger" alt="" />
            </button>
        </div>
    </header>
    <RouterView />
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
