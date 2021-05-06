import { createRouter, createMemoryHistory, createWebHistory } from "@ionic/vue-router";
import Home from "../views/Home.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/about/:id",
		name: "About",
		component: () => import("../views/About.vue"),
	},
];

const isServer = typeof window === "undefined";
const history = isServer ? createMemoryHistory() : createWebHistory(process.env.BASE_URL);

export default function () {
	return createRouter({ routes, history });
}

// const router = createRouter({
// 	history: createWebHistory(process.env.BASE_URL),
// 	routes,
// });
// export default router;
