import { createApp } from "vue";
import "./assets/css/index.css";
import App from "./App.vue";
import * as VueRouter from "vue-router";

// Route
import Home from "./components/Home.vue";
import LogIn from "./components/LogIn.vue";
import SignUp from "./components/SignUp.vue";
import ToDo from "./components/ToDo.vue";

const routes = [
	{ path: "/", component: Home },
	{ path: "/login", component: LogIn },
	{ path: "/signup", component: SignUp },
	{ path: "/app", component: ToDo },
];

const router = VueRouter.createRouter({
	history: VueRouter.createWebHashHistory(),
	routes,
});

const app = createApp(App);

app.use(router);

app.mount("#app");
