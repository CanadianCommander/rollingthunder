<template>
  <div id="app">
			<Header></Header>
			<Dashboard></Dashboard>
  </div>
</template>

<script>
	import Dashboard from './views/dashboard/Dashboard';
	import GlobalHeader from './components/GlobalHeader';

	export default {
		name: 'App',
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
}
</style>

