<template>
	<div>
		<div class="row header-top">
			<div class="col-sm-11">
				<h1>Rolling Thunder</h1>
				<h2>Releasing software simplified!</h2>
			</div>
			<div class="col-sm-1 d-flex align-items-center justify-content-end">
				<a href="https://github.com/CanadianCommander/rollingthunder"
					title="Source on GitHub">
					<img class="github-img"
						src="@/assets/img/GitHub-Mark-Light-64px.png"
						alt="Github Link">
				</a>
			</div>
		</div>
		<div v-if="showTabs" class="row">
			<div class="col-md-10">
				<BasicTabBar :labels="getHeaderTabs()" :default-tab="getSelectedTab()"/>
			</div>
			<div class="color-background-transition col-md-2 d-flex flex-row align-items-center justify-content-end">
				<Button class="button-secondary" @click="doLogout()">
					Logout
				</Button>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { Component, Vue, Watch } from "vue-property-decorator";
	import BasicTabBar from "@/components/BasicTabBar.vue";
	import { Route } from "vue-router";
	import Button from "@/components/Button.vue";

	@Component({
		components: {
			BasicTabBar,
			Button,
		}
	})
	export default class GlobalHeader extends Vue
	{
		private showTabs = true;

		getHeaderTabs()
		{
			return [
				{label: "Dashboard", routeName: "dashboard"},
				{label: "Release Plans", routeName: "releasePlans"},
				{label: "Release History", routeName: "releaseHistory"},
				{label: "Fleet Management", routeName: "fleetManagement"},
				{label: "Monitor", routeName: "monitor"},
				{label: "Account Settings", routeName: "accountSettings"},
			];
		}

		getSelectedTab()
		{
			let headerTabs = this.getHeaderTabs();

			let index = 0;
			for (let tab of headerTabs)
			{
				if (tab.routeName === this.$router.currentRoute.name)
				{
					return index;
				}
				index++;
			}
		}

		@Watch("$route", { immediate: true, deep: true})
		onRouteChange(newRoute: Route)
		{
			if (newRoute.name != null)
			{
				this.showTabs = !["login"].includes(newRoute.name);
			}
			else
			{
				this.showTabs = true;
			}
		}

		doLogout()
		{
			//TODO real logout
			this.$router.push({name: "login"});
		}
	}
</script>

<style lang="scss" scoped>
	.header-top {
		background-color: $color-background-secondary;

		h2 {
			@include subheader-primary();
			display: inline-block;
			margin: 10px 0 10px 0;
		}
		h1 {
			display: inline-block;
			margin: 10px 20px 10px 20px;
		}

		.github-img {
			width: 32px;
			height: 32px;
		}
	}
</style>
