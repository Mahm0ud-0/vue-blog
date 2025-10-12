<template>
    <div
        class="flex flex-col md:flex-row max-w-[900px] mx-auto gap-10 w-full px-4 md:px-6 py-6 bg-background-light/80 backdrop-blur-sm rounded-xl"
    >
        <!-- img -->
        <div class=" rounded overflow-hidden">
            <img
                src="../assets/images/Hacker5.jpg"
                alt=""
                class="w-full h-full object-cover"
            />
        </div>
        <div class="space-y-4 ">
            <div
                class="flex flex-col md:flex-row gap-2 gap-y-4 justify-between md:items-center text-xs lg:text-sm font-semibold text-primary-dark/60"
            >
                <!-- tags -->
                <div class="flex gap-2">
                  <Tag>Technology</Tag>
                  <Tag>AI</Tag>
                </div>
                <div class="flex gap-1 whitespace-nowrap">
                    <!-- author -->
                    <p>By Jone Doe -</p>
                    <!-- date -->
                    <p>2025-09-24</p>
                </div>
            </div>
            <!-- title -->
            <h2 class="text-lg md:text-2xl font-bold text-primary-dark">
                The Future of AI in Creative Industries
            </h2>
            <!-- summary -->
            <p class="opacity-70 text-sm md:text-[16px]">
                An exploration of how artificial intelligence is transforming
                creative fields like design, music, and writing.
            </p>
            <RouterLink to="/articles/1" class="hover:underline">
                <!-- readMore -->
                read more
            </RouterLink>
        </div>
    </div>
</template>

<script setup>
import { RouterLink } from "vue-router"
import Tag from "./Tag.vue"
</script>
