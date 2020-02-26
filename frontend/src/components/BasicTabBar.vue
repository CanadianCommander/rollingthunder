<template>
	<div class="row">
		<div class="col-sm-1" v-for="label in labels" v-bind:key="label.label">
			{{label.label}}
		</div>
	</div>
</template>

<script lang="ts">
	import { Vue, Prop, Component } from "vue-property-decorator";
	import RouteLabel from "../lib/model/RouteLabel";

	@Component({})
	export default class BasicTabBar extends Vue
	{
		@Prop()
		labels: RouteLabel[] = [];
	}
</script>

<style scoped>

</style>
