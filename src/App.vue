<template>
	<Navbar />
	<router-view></router-view>
</template>

<style scoped></style>

<script>
import Navbar from "./components/NavBar.vue";
import Home from "./components/Home.vue";

export default {
	components: {
		Navbar,
		Home,
	},
};
</script>
