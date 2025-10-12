import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("../views/HomeView.vue"),
        },
        {
            path: "/articles",
            name: "articles",
            component: () => import("../views/ArticlesView.vue"),
        },
        {
            path: "/articles/:id",
            name: "article",
            component: () => import("../views/SingleArticleView.vue"),
        },
    ],
})

export default router
