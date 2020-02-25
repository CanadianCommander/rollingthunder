<template>
  <div id="app" class="d-flex flex-column">
			<Header></Header>
			<div class="position-relative flex-grow flex-fill">
				<img class="bomber-logo" src="@/assets/img/BomberLogo.png">
				<Dashboard></Dashboard>
			</div>
  </div>
</template>

<script lang="ts">
	import Dashboard from "./views/dashboard/Dashboard";
	import GlobalHeader from "./components/GlobalHeader";

	export default {
		name: "App",
		components: {
			Dashboard: Dashboard,
			Header: GlobalHeader,
		}
	};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
		min-height: 100%;
  color: $color-text-primary;
	background-color: $color-background-primary;

	.bomber-logo {
		position: absolute;
		width: 206px;
		height: 137px;
		z-index: 0;
		left: calc(50% - 103px);
		top: calc(50% - 68px);
	}
}
</style>


