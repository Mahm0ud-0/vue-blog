<template>
    <div
        class="container max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 py-5 lg:py-10 space-y-10"
    >
        <!-- title -->
        <h1 class="text-xl lg:text-4xl text-center font-bold text-primary-dark">
            The Future of AI in Creative Industries
        </h1>

        <div class="flex flex-col gap-4">
            <div
                class="flex gap-1 whitespace-nowrap text-primary-dark/60 font-bold px-2"
            >
                <!-- author -->
                <p>By Jone Doe -</p>
                <!-- date -->
                <p>2025-09-24</p>
            </div>
            <!-- tags -->
            <div class="flex gap-2 flex-wrap">
                <Tag>Technology</Tag>
                <Tag>Technology</Tag>
                <Tag>Technology</Tag>
                <Tag>Technology</Tag>
            </div>

            <!-- img -->
            <div class="rounded overflow-hidden w-full">
                <img
                    src="../assets/images/Hacker5.jpg"
                    alt=""
                    class="w-full h-full object-cover"
                />
            </div>
        </div>
        <!-- text body -->
        <p
            class="text-justify text-primary-dark leading-9 font-semibold text-wrap overflow-hidden"
        >
            The Evolution of Programming
            Languages Programming languages have
            evolved significantly since the early days of computing. From
            machine language to high-level languages, the landscape has changed
            drastically.The 1950s and 60s saw the
            advent of Fortran and Lisp, languages designed to simplify complex
            calculations and data manipulations. In the 70s and 80s, languages
            like C and Pascal became popular, offering more control over
            hardware."The limits of my language mean the limits of my
            world."Then came the 90s, the era of the Internet. Languages like
            Java and JavaScript were developed, focusing on portability and web
            development. The 2000s introduced us to languages designed for
            specific tasks, such as Python for data analysis and Ruby for web
            development. we see a trend
            towards languages that are easy to learn and write but also highly
            efficient. Languages like Rust and Go are gaining popularity for
            their performance and safety features. language has its own set of
            pros and cons, and the best choice often depends on the project
            requirements. For instance, C++ is generally chosen for system-level
            programming, whereas Python is popular for data science. thing is
            sure: the evolution of programming languages has always been driven
            by the needs of its users—programmers. Whether it's making it easier
            to write code or executing it faster, the focus is always on
            improving the developer experience.\u003C/p\u003E\n\n\u003Cp\u003EAs
            we move into an era of AI and machine learning, languages that can
            efficiently handle large data sets and complex calculations will
            continue to evolve. It is an exciting time to be a programmer, with
            endless possibilities on the horizon. the programming languages of
            tomorrow may look nothing like those of today. However, they will
            continue to serve the same purpose: to help us solve problems and
            make our lives easier.
        </p>
    </div>
    <!-- featured articles -->
    <FeaturedArticles />
</template>

<script setup>
import FeaturedArticles from "@/components/FeaturedArticles.vue"
import Tag from "@/components/Tag.vue"
</script>

<style></style>
