<template>
	<div id="app" class="d-flex flex-column">
		<Header class="container-fluid"/>
		<div class="container-fluid position-relative flex-grow flex-fill d-flex flex-column">
			<img class="bomber-logo" src="@/assets/img/BomberLogo.png" alt="Bomber Logo">
			<router-view/>
		</div>
	</div>
</template>

<script lang="ts">
	import Dashboard from "./views/dashboard/Dashboard.vue";
	import GlobalHeader from "./components/GlobalHeader.vue";
	import { Component, Vue } from "vue-property-decorator";

	@Component({
		components: {
			Dashboard,
			"Header": GlobalHeader,
		},
	})
	export default class App extends Vue {}
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


