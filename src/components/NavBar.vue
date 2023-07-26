<template>
	<div class="bg-gray-50 drop-shadow-lg">
		<nav
			class="container mx-auto flex h-16 w-full items-center justify-between text-sm text-gray-800 sm:text-base md:text-lg"
		>
			<div>
				<router-link class="navbar-link mr-5 text-inherit" to="/"
					>Home</router-link
				>
				<router-link class="navbar-link text-inherit" to="/app"
					>To Do List</router-link
				>
			</div>
			<div class="flex items-center">
				<router-link class="navbar-link text-inherit" to="/login"
					>Log In</router-link
				>
				<div class="mx-2.5 h-10 w-px bg-gray-800"></div>
				<router-link
					class="navbar-btn flex h-9 w-24 items-center justify-center rounded-sm bg-gray-800 text-sm font-light text-slate-50 sm:text-base md:text-lg"
					to="signup"
				>
					<span class="text-inherit">Sign Up</span>
				</router-link>
			</div>
		</nav>
	</div>
</template>

<style scoped>
.navbar-link:hover {
	color: #030712;
}

.navbar-btn:hover {
	background-color: #030712;
}
</style>

<script>
export default {};
</script>
